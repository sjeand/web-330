/*
==========================================
  Title: theme.js
  Author: Professor Krasso
  Date: 03/15/2021
  Modified by: Sarah Jean Baptiste
  Description: Theme JavaScript
==========================================
*/

// Set the default theme to light mode.
 function setDefaultTheme()
 {
     const theme = localStorage.getItem("mode") || "light-theme";
     const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
     const iconText = localStorage.getItem("iconText") || "Light Mode";
 
     document.body.classList.value = theme;
     document.getElementById("icon-mode").classList.add(iconMode);
     document.getElementById("icon-text").innerHTML = iconText;
 }
 
 // Set the HTML body to the selected theme, if none selected set to default light mode. 
 function setSelectedTheme()
 {
     document.body.classList.value = localStorage.getItem("mode") || "light-theme";
 }