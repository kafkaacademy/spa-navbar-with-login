import './index.css'
import { MenuItem } from './menu.mjs'
import './dialog.mjs'
import './city.mjs'

const spaMenu = document.querySelector("spa-menu");
spaMenu.addEventListener("menu-item-clicked", (event) => switchItem(event.detail))

for (const el of document.getElementsByClassName("tabcontent")) {
  spaMenu.items.push(new MenuItem(el.id, el))
}

const dialog = document.querySelector("login-dialog");
dialog.menu = spaMenu;

function switchItem(element) {
  for (const el of document.getElementsByClassName("tabcontent"))
    el.style.display = "none";
  element.style.display = "block";
}