import './index.css'
import './dialog.mjs'
import './city.mjs'

const btns = document.getElementsByClassName("tablinks");
for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener("click", () => { openCity(event, btn.innerText) })
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}