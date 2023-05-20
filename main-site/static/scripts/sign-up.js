/**
 * Namespace class for handling signup page callbacks
 */
class signup
{
    /**
     * Called when the sign-up button is pressed, invokes userbase to signup a new user
     * @param {*} e event
     */
    static handleSignUp(e) 
    {
        e.preventDefault()
        document.getElementById("pwerror").innerHTML = ""
        document.getElementById("emailerror").innerHTML = ""

        if (document.getElementById("signup-email").value === document.getElementById("signup-emailconf").value)
        {
            if(document.getElementById("signup-password").value === document.getElementById("signup-passwordconf").value)
            {
                const username = document.getElementById('signup-email').value
                const email = document.getElementById('signup-email').value
                const password = document.getElementById('signup-password').value
    
                userbase.signUp({ username, email, password, rememberMe: 'local' })
                    .then(() => window.location.replace("/account"))
                    .catch((e) => document.getElementById('signup-error').innerHTML = e)   
            }
            else
            {
                document.getElementById("pwerror").innerHTML = "Passwords must match"
            }
        }
        else
        {
            document.getElementById("emailerror").innerHTML = "Emails must match"
        }
    }
}

account.onSessionStart.then(
    () => {
        document.getElementById("signup-form").addEventListener("submit", signup.handleSignUp)
    }
)
