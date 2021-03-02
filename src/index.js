import './index.css'
import './menu.mjs'
import './dialog.mjs'
import './city.mjs'

const tab = document.querySelector("spa-menu");
tab.addEventListener("menu-item-clicked", (event)=>openCity(event)  )

function openCity(evt) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(evt.detail).style.display = "block";
  evt.currentTarget.className += " active";
}