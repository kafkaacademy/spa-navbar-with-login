import './index.css'
import './menu.mjs'
import './dialog.mjs'
import './city.mjs'


const menu = document.querySelector("spa-menu");
menu.addEventListener("menu-item-clicked", (event)=>openCity(event)  )

const dialog = document.querySelector("login-dialog");
dialog.menu=menu;

function openCity(event) {
  for (const el of document.getElementsByClassName("tabcontent")) 
    el.style.display = "none";  
  for (const link of document.getElementsByClassName("tablinks")) 
    link.className = link.className.replace(" active", "");  
  document.getElementById(event.detail).style.display = "block";
  event.currentTarget.className += " active";
}