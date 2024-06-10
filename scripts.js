const mainMenu = document.getElementById("main-menu");

function loadMenus() {
fetch("main-menu.html")
  .then((res) => res.text())
  .then((html) => {
    mainMenu.innerHTML = html;
   })
  .catch((e) => console.error(e));
	}

document.addEventListener('DOMContentLoaded', function () {
	loadMenus();

});
