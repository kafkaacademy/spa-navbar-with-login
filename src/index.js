import './index.css'
import { MenuItem } from './menu.mjs'
import './dialog.mjs'
import './city.mjs'


const spaMenu = document.querySelector("spa-menu");
spaMenu.addEventListener("menu-item-clicked", (event) => openCity(event))

const items = [];
for (const el of document.getElementsByClassName("tabcontent")) {
  items.push(new MenuItem(el.id, el))
}

spaMenu.items = items;

const dialog = document.querySelector("login-dialog");
dialog.menu = spaMenu;


function openCity(event) {
  for (const el of document.getElementsByClassName("tabcontent"))
    el.style.display = "none";

  for (const link of document.getElementsByClassName("tablinks"))
    link.className = link.className.replace(" active", "");
  event.detail.style.display = "block";
  event.detail.className += " active";
}