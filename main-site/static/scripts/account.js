
// TODO: change hide / showing mechanism
// TODO: replay showing animation and page changes
// TODO: properly handle nologin clause through account.onSessionStart promise
class accountPage
{
    static unhideBlog(blog)
    {
        blog.style.display = "block"
    }

    static getNode(idName)
    {
        return document.getElementById(idName)
    }

    static show(node)
    {
        node.style.display = "block";
    }

    static hide(node)
    {
        node.style.display = "none";
    }

    static showAllBookmarks()
    {
        this.show(this.getNode("bookmarks-articles"))
        this.show(this.getNode("bookmarks-books"))
        
        // TODO: Change this when deadlines implemented
        this.hide(this.getNode("bookmarks-deadlines"))
    }

    static showArticles()
    {
        this.show(this.getNode("bookmarks-articles"))
        this.hide(this.getNode("bookmarks-books"))
        this.hide(this.getNode("bookmarks-deadlines"))
    }

    static showBooks()
    {
        this.hide(this.getNode("bookmarks-articles"))
        this.show(this.getNode("bookmarks-books"))
        this.hide(this.getNode("bookmarks-deadlines"))
    }

    static showDeadlines()
    {
        this.hide(this.getNode("bookmarks-articles"))
        this.hide(this.getNode("bookmarks-books"))
        this.show(this.getNode("bookmarks-deadlines"))
    }

    static unhideBlogs()
    {
        var blogs = document.querySelectorAll("[data-type=\"blog\"]")
    
        for (var blog of blogs.values())
        {   
            if(bookmarks.hasBookmark(blog.firstChild.dataset.id))
            {
                accountPage.unhideBlog(blog)
            }
        }
    }

    static showBookmarkPage()
    {
        this.show(this.getNode("bookmarks-loggedin"))
        this.hide(this.getNode("bookmarks-nologin"))
    }

    static showNoLoginPage()
    {
        this.hide(this.getNode("bookmarks-loggedin"))
        this.show(this.getNode("bookmarks-nologin"))
    }
}

bookmarks.onBookmarksLoaded
    .then(() => { accountPage.showBookmarkPage(); accountPage.unhideBlogs() })
    .catch((err) => accountPage.showNoLoginPage())

bookmarks.bookmarkChangeCallbacks
    .push(accountPage.unhideBlogs)