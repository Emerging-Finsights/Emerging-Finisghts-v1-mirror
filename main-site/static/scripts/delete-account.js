function deleteAccount()
{
    userbase.deleteUser().then(() => {
        // user marked for deletion
        window.location.replace("/index.html")
      }).catch((e) => console.error(e))

}