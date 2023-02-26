const menuIcon = document.getElementById("boton-menu");

menuIcon.addEventListener("click", () => {
  // Al hacer click en el boton del menu, cambio para que aparezca
  // el icono para cerrar el menu
  menuIcon.innerHTML = menuIcon.innerHTML === "menu" ? "close" : "menu";
  const menuList = document.getElementsByClassName("nav__menu-container")[0];
  //   Cuando el menu es abierto hago que aparezcan las opciones del menu
  menuList.classList.toggle("ocultar");
});
