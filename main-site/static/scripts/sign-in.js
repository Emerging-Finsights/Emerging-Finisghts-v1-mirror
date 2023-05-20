
/**
 * Namespace class for handling signin page callbacks
 */
class signin
{
    /**
     * Function to handle the sign-in submit button
     * @param {*} event
     */
    static onSignIn(event) 
    {
        event.preventDefault()
        
        console.log("Signin submit triggered")

        const username = document.getElementById('signin-email').value
        const password = document.getElementById('signin-password').value
    
        userbase.signIn({ username, password, rememberMe: 'local' })
          .then(signin.onSigninSuccess)
          .catch(signin.onSigninFail)
    }

    /**
     * Called when a sign-in attempt succeeds
     * @param {*} user 
     */
    static onSigninSuccess(user)
    {
        signin.hideSpinner()

        console.debug("logged in!")
        window.location.replace("/account")
    }

    /**
     * Called when a sign-in attempt fails
     * @param {*} error 
     */
    static onSigninFail(error)
    {
        signin.hideSpinner()

        document.getElementById('signin-error').innerHTML = error
    }

    /**
     * Hides the form and shows a waiting spinner
     */
    static showSpinner()
    {

    }

    /**
     * Shows the form and hides the waiting spinner
     */
    static hideSpinner() 
    {

    }
}

account.onSessionStart.then(() => {
    // register event callback
    document.getElementById("signin-form").addEventListener("submit", signin.onSignIn)

    // if already signed in redirect to account page
    if (account.userLoggedIn)
    {
        window.location.replace("/account")
    }
})