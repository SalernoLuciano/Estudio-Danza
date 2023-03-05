// Utils.js
function cambiarClase(element, clase) {
  if (element.value?.length < 3) {
    element.nextElementSibling?.classList.remove(clase);
  }
  if (element.value?.length >= 3) {
    element.nextElementSibling?.classList.add(clase);
  }
}

// constante que pasara a Utils.js
const MAILREGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const menuIcon = document.getElementById("boton-menu");
menuIcon.addEventListener("click", () => {
  // Al hacer click en el boton del menu, cambio para que aparezca
  // el icono para cerrar el menu
  menuIcon.innerHTML = menuIcon.innerHTML === "menu" ? "close" : "menu";
  const menuList = document.getElementsByClassName("nav__menu-container")[0];
  //   Cuando el menu es abierto hago que aparezcan las opciones del menu
  menuList.classList.toggle("ocultar");
});

// Validacion del Nombre
const inputNombre = document.getElementById("form-nombre");
inputNombre.addEventListener("focus", () => {
  cambiarClase(inputNombre, "ocultar-error");
});

inputNombre.addEventListener("input", () => {
  cambiarClase(inputNombre, "ocultar-error");
});

// Validacion del Apellido
const inputApellido = document.getElementById("form-apellido");
inputApellido.addEventListener("focus", () => {
  cambiarClase(inputApellido, "ocultar-error");
});

inputApellido.addEventListener("input", () => {
  cambiarClase(inputApellido, "ocultar-error");
});

// Validacion del Mail
const inputMail = document.getElementById("form-email");
inputMail.addEventListener("input", () => {
  if (MAILREGEX.exec(inputMail.value) === null) {
    inputMail.nextElementSibling.classList.remove("ocultar-error");
  }
  if (MAILREGEX.exec(inputMail.value) !== null) {
    inputMail.nextElementSibling.classList.add("ocultar-error");
  }
});

// Validacion del Mensaje
const textarea = document.querySelector("textarea");
textarea.addEventListener("input", (event) => {
  if (event.target.value.length <= 500) {
    const span = document.getElementsByClassName("info-comentario")[0];
    spanText = `${500 - event.target.value.length} caracteres restantes.`;
    span.innerHTML = '<i class="fi fi-rr-info"></i>' + spanText;
  }
});
