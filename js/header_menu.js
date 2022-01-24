var menus = document.getElementById("menu");


var conocenos =  document.getElementById("conocenos")
var servicios =  document.getElementById("servicios")
var ventajas =  document.getElementById("ventajas")
var responsabilidad =  document.getElementById("responsabilidad")

// console.log(img);
menus.addEventListener("click", validarClase)
logo.addEventListener("click", validarClase)
casa.addEventListener("click", validarClase2)
actores.addEventListener("click", validarClase2)
argumentos.addEventListener("click", validarClase2)
download.addEventListener("click", validarClase2)
usuario.addEventListener("click", validarClase2)
registro.addEventListener("click", validarClase2)

function validarClase(menus){
  var list = document.getElementsByName("nombre")[0].children;
  for(let i=0; i<list.length; i++){
    if(list[i].className.includes("header__item--active")){
      list[i].classList.remove("header__item--active");
      img.setAttribute('src', './img/menu.svg');
    }else{
      list[i].classList.add("header__item--active");
      img.setAttribute('src', './img/close.svg');
    }
  }
}


function validarClase2(menus){
  var list = document.getElementsByName("nombre")[0].children;
  for(let i=0; i<list.length; i++){
    if(list[i].className.includes("header__item--active")){
      list[i].classList.add("header__item--active");
      img.setAttribute('src', './img/close.svg');
    }
  }
}
