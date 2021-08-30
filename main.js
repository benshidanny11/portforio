document.getElementById("menu-btn").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.remove("show-menu");
});

document.getElementById("btn-hide").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.add("show-menu");
});

document.getElementById("mnu-port").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.add("show-menu");
});

document.getElementById("mnu-about").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.add("show-menu");
});

document.getElementById("mnu-contact").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.add("show-menu");
});
