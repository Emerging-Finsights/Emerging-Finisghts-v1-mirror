/**
 * (static class) Namespace holding functions related to 
 * loading and manipulating user bookmarks. Also loads bookmarks
 * when this script is run within a page, showing / hiding bookmark
 * buttons where appropriate.  
 */
class bookmarks
{
    static bookmarks = []
    static bookmarkChangeCallbacks = []

    /**
     * Getter for a bookmark object within the users bookmarks.
     * If the user does not have a bookmark with the given bookmark id
     * the function returns null.
     * 
     * @param {string} bookmarkID The id of the bookmark to be retrieved
     * @returns The bookmark object associated with the given id
     */
    static getBookmark(bookmarkID) 
    {
        for(var bookmark of bookmarks.bookmarks)
        {
            if (bookmark.bkID === bookmarkID)
            {
                return bookmark
            }
        }

        return null
    }

    /**
     * Checks whether the current user has a given bookmark
     * @param {string} bookmarkID The id of the bookmark to be checked for 
     * @returns Whether the current user has a bookmark with the given id
     */
    static hasBookmark(bookmarkID) 
    {
        for(var bookmark of bookmarks.bookmarks)
        {
            if (bookmark.bkID === bookmarkID)
            {
                return true
            }
        }

        return false
    }

    /**
     * Displays the bookmarked icon (unbookmark button) of a given article / blog
     * @remarks Doesn't modify the users bookmark data 
     * @param {Node} bookmarkNode The root node of the article / blog  
     */
    static displayBookmarkedButton(bookmarkNode) 
    {
        var bookmarkFilled = findChild(bookmarkNode, "bookmark-filled")
        var bookmarkEmpty = findChild(bookmarkNode, "bookmark-empty")

        // check it
        bookmarkFilled.style.display = "block"
        bookmarkEmpty.style.display = "none"
    }

    /**
     * Displays the unbookmarked icon (bookmark button) of a given article / blog
     * @remarks Doesn't modify the users bookmark data 
     * @param {Node} bookmarkNode The root node of the article / blog  
     */
    static displayUnBookmarkedButton(bookmarkNode) 
    {
        var bookmarkFilled = findChild(bookmarkNode, "bookmark-filled")
        var bookmarkEmpty = findChild(bookmarkNode, "bookmark-empty")
    
        // uncheck it
        bookmarkEmpty.style.display = "block"
        bookmarkFilled.style.display = "none"
    }

    /**
     * Helper function that removes all the users bookmarks 
     */
    static cleanItems() 
    {
        userbase.openDatabase(
            {
                databaseName: "bookmarks",
                changeHandler: function (items) 
                {
                    var itemIDs = []
                    for (var i = 0; i < items.length; i++)
                    {
                        itemIDs.push(items[i].itemId)                        
                    }
                    
                    if(itemIDs.length > 0)
                    {
                        console.log("deleting:", itemIDs[0])
                        userbase.deleteItem({ databaseName : "bookmarks", itemId: itemIDs[0] })
                    }
                }
            })
    }

    /**
     * Invokes the loading of the bookmarks from userbase. Also setups the 
     * handling of changes to the bookmarks database and allows for callbacks to be called
     * when the database changes. 
     * @returns a promise that is resolved when the bookmarks are loaded from userbase
     */
    static loadBookmarks()
    {
        return userbase.openDatabase(
        {
            databaseName: "bookmarks",
            changeHandler: function (items) 
            {
                bookmarks.bookmarks = []

                for (var i = 0; i < items.length; i++)
                {
                    var item = items[i].item
                    bookmarks.bookmarks.push({ itemId : items[i].itemId, bkID : item["bkID"], bkLink : item["bkLink"] })
                }

                var bookmarkableItems = document.querySelectorAll("[data-type=\"bookmark\"]")
    
                for (var bookmark of bookmarkableItems.values())
                {   
                    if(bookmarks.hasBookmark(bookmark.dataset.id))
                    {
                        bookmarks.displayBookmarkedButton(bookmark)
                    }
                    else 
                    {
                        bookmarks.displayUnBookmarkedButton(bookmark)
                    }
                }

                for (var callback of bookmarks.bookmarkChangeCallbacks)
                {
                    callback()
                }
            }
        })
    }

    /**
     * Adds a new bookmark to the users bookmarks and visually updates the bookmark button.
     * @param {Node} bookmarkButton The bookmark button that has been pressed
     * @param {string} bookmarkID The id of the bookmark to be added
     * @param {string} bookmarkPermaLink The link to the item that should be bookmarked 
     */
    static bookmarkItem(bookmarkButton, bookmarkID, bookmarkPermaLink)
    {

        if (!bookmarks.hasBookmark(bookmarkID))
        {
            userbase.insertItem(
            {
                databaseName: "bookmarks",
                item: { "bkID" : bookmarkID, "bkLink" : bookmarkPermaLink }
            })
        
            this.displayBookmarkedButton(bookmarkButton.parentNode.parentNode)
        }
    }

    /**
     * Removes an existing bookmark from the users bookmarks and visually updates the bookmark button.
     * @param {Node} bookmarkButton The unbookmark button that has been pressed
     * @param {string} bookmarkID The id of the bookmark to be removed
     * @param {string} bookmarkPermaLink The link to the item that should be unbookmarked 
     */
    static unbookmarkItem(unbookmarkButton, bookmarkID, bookmarkPermaLink)
    {

        if (bookmarks.hasBookmark(bookmarkID))
        {
            var bookmark = bookmarks.getBookmark(bookmarkID)

            if (bookmark != null)
            {
                userbase.deleteItem(
                {
                    databaseName: "bookmarks",
                    itemId : bookmark.itemId
                })

                this.displayUnBookmarkedButton(unbookmarkButton.parentNode.parentNode)
            }
        }
    }

    // promise that is resolved when all bookmarks are loaded from userbase
    static onBookmarksLoaded = account.onSessionStart.then(bookmarks.loadBookmarks)
}

