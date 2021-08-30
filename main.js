document.getElementById("menu-btn").addEventListener("click", function () {
  let menuList = document.getElementById("menu-list");
  menuList.classList.remove("show-menu");
});
var menus=document.getElementsByClassName("hide-menu");
var menuarray = Array.prototype.map.call(menus, function(element) {
  return element;
});
menuarray.forEach((element) => {
  element.addEventListener("click", function () {
    let menuList = document.getElementById("menu-list");
    menuList.classList.add("show-menu");
  });
});
