/**
 * Namespace class to manage the header that appears on the top of every page
 */
class header
{
    /**
     * @brief Hides / shows the user account buttons on the top-left of the header.
     * @remark Called when userbase and html document is loaded 
     * @param {*} session 
     */
    static onSessionInit(session)
    {
        if (session.user != null) {
            header.showAccountButton()
            header.showLogoutButton()
            
            header.userLoggedIn = true
            header.user = session.user
        } else {
            header.showSignInButton()
        }

        // register event callback
        document.getElementById("logout-button").addEventListener("click", header.onLogout)

        return session
    }

    /**
     * Makes the sign in button visible
     */
    static showSignInButton() 
    {
        document.getElementById("signin-button")
            .style.display = "block";
    }

    /**
     * Makes the account button visible
     */
    static showAccountButton() 
    {
        document.getElementById("account-button")
            .style.display = "block";
    }

    /**
     * Makes the logout button visible
     */
    static showLogoutButton() 
    {
        document.getElementById("logout-button")
            .style.display = "block";
    }

    /**
     * @brief Logs the user out of userbase and loads the home-page
     * @remarks Called when the user presses the 'logout' button
     */
    static onLogout() 
    {
        console.log("Logging out")
        userbase.signOut()
            .then(() => { window.location.replace("/index.html") })
            .catch((e) => {})
    }

}

account.onSessionStart.then(header.onSessionInit)