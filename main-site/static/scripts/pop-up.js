/**
 * @brief Toggles the visibility of the default hidden profile pop-up
 * @param string id The id of the html tag to be toggled
 */

var currentPopup = null;
var ignoreFlag = false;

function toggleProfilePopup(id) 
{
    if (currentPopup == null)
    {
        var popup = document.getElementById(id);
        popup.classList.toggle("show");
        currentPopup = id;
        ignoreFlag = true;
    }
}

function unpopup()
{
    if (ignoreFlag == false)
    {
        var popup = document.getElementById(currentPopup);
        popup.classList.toggle("show");
        currentPopup = null;
    }
    else
    {
        ignoreFlag = false;
    }

}
