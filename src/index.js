import './index.css'
import { MenuItem } from './menu.mjs'
import './dialog.mjs'
import './city.mjs'

const spaMenu = document.querySelector("spa-menu");

spaMenu.switch=(menuItem)=> {
  spaMenu.items.forEach((item) =>item.el.style.display = "none" )
  menuItem.el.style.display = "block";
};


for (const el of document.getElementsByClassName("tabcontent")) {
  spaMenu.items.push(new MenuItem(el.id, el))
}

const dialog = document.querySelector("login-dialog");
dialog.menu = spaMenu;

