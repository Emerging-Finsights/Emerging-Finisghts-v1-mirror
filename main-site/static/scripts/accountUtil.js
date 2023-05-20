
/**
 * Promise that is resolved once the document has finished loading 
 */
WINDOW_LOAD_TIMEOUT_SECONDS = 100
onDocumentLoad = new Promise(
    (resolve, reject) => { 
        if(document.readyState !== "complete")
        {
            window.onload = resolve
            setTimeout(reject, WINDOW_LOAD_TIMEOUT_SECONDS * 1000)
        }
        else 
        {
            resolve()
        }
    }
)

/**
 * Namespace class for handling userbase initialisation
 */
class account 
{
    static session = null
    static userLoggedIn = false

    static onSessionStart = Promise.all(
        [ userbase.init({ appId: APPID }), onDocumentLoad ]
    )
    .then((promiseResult) => { 
        this.sessionInit(promiseResult[0])
        return promiseResult[0] 
    })
    .catch((e) => { console.log("Error: ", e) })
    
    /**
     * Called when the session is initialised by userbase and the html document has been loaded
     * @param {*} session 
     */
    static sessionInit(session)
    {
        this.session = session
        this.userLoggedIn = (this.session.user != null)
    }
}


