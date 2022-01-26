var menus = document.getElementById("menus");
var conocenos = document.getElementById("conocenos");
var ventajas = document.getElementById("ventajas");
var responsabilidad = document.getElementById("responsabilidad");
var contacto = document.getElementById("contacto");

menus.addEventListener("click", validarClase, true);
conocenos.addEventListener("click", validarClase2, true);
ventajas.addEventListener("click", validarClase2, true);
responsabilidad.addEventListener("click", validarClase2, true);
contacto.addEventListener("click", validarClase2, true);

function validarClase() {
  var list = document.getElementsByName("nombre")[0].children;

  if (menus.className.includes("fa-bars")) {
    console.log("menu");
    menus.classList.remove("fa-bars");
    menus.classList.add('fa-times');
  } else {
    console.log("close");
    menus.classList.remove("fa-times");
    menus.classList.add('fa-bars');
  }

  for (let i = 1; i < list.length; i++) {
    if (list[i].className.includes("header_item--active")) {
      list[i].classList.remove("header_item--active");
    } else {
      list[i].classList.add("header_item--active");
    }
  }
}

function validarClase2() {
  var list = document.getElementsByName("nombre")[0].children;
  console.log("list", list);
  for (let i = 1; i < list.length; i++) {
    if (list[i].className.includes("header__item--active")) {
      console.log("entre");
      console.log("list[i].className", list[i].className);
      list[i].classList.remove("header__item--active");
      menus.classList.remove("fa-times");
      menus.classList.add('fa-bars');
    }
  }
}
