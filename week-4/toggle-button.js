 /*
=======================================================
  Title: toddle-button.js
  Author: Professor Krasso
  Date: 04/02/2021
  Modified by: Sarah Jean Baptiste
  Description: Toggle Button for light and dark mode. 
========================================================
*/
 
// Give "icon-text" an initial value of "Light Mode".
document.getElementById("icon-text").innerHTML = "Light Mode";
            
// ToggleMode function to switch themes
function toggleMode(x)
{
let colorTheme = document.body.classList; 
let iconMode = x.classList;

    //If the current theme is in light mode, switch users preference to dark mode.
    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }
    //Or if the current theme is in dark mode, switch users preference to light mode.
    else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }
    //Apply updated user selection.
    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}