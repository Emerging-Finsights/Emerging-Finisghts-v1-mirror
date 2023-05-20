function changeEmail(e)
{
    e.preventDefault()

    userbase.updateUser({
    username: document.getElementById("change-email").value,
    email: document.getElementById("change-email").value
    }).then(() => {
    // user account updated
    console.log("Email Updated")
    }).catch((e) => document.getElementById("email-error").innerHTML= e)
    document.getElementById("email-error").innerHTML = "Email successfully changed"
}

function changePassword(e)
{
    e.preventDefault()

    userbase.updateUser({
    currentPassword: document.getElementById("current-password").value,
    newPassword: document.getElementById("change-password").value
    }).then(() => {
    // user account updated
    console.log("Password Updated")
    }).catch((e) => document.getElementById("password-error").innerHTML= e)
    document.getElementById("password-error").innerHTML = "Password successfully changed"
    
}

function displayEmail()
{
    
}

function displayPassword()
{

}

account.onSessionStart.then(() => {
document.getElementById("change-email-form").addEventListener("submit", changeEmail)
document.getElementById("change-password-form").addEventListener("submit", changePassword)

})