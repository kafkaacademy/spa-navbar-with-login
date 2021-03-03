import './index.css'
import { MenuItem } from './menu.mjs'
import './dialog.mjs'
import './city.mjs'

const spaMenu = document.querySelector("spa-menu");

spaMenu.switch = (menuItem) => {
  spaMenu.items.forEach((item) => item.el.style.display = "none")
  menuItem.el.style.display = "block";
};

spaMenu.items = addItems();

function addItems() {
  const items = [];
  for (const el of document.getElementsByClassName("tabcontent")) {
    items.push(new MenuItem(el.id, el))
  }
  return items;
}

const dialog = document.querySelector("login-dialog");
dialog.menu = spaMenu;

