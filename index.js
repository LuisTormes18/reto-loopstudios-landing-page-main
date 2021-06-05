const $btnOpenMenu = document.getElementById("btn-open-menu");
const $img_btnOpenMenu = document.querySelector("#btn-open-menu >img");
const $menu_movil = document.querySelector(".navbar-menu");

let desplegado = false;
$btnOpenMenu.addEventListener("click", function () {
  if (!desplegado) {
    $menu_movil.style.visibility = "visible";
    $img_btnOpenMenu.setAttribute("src", "./images/icon-close.svg");
  } else {
    $img_btnOpenMenu.setAttribute("src", "./images/icon-hamburger.svg");

    $menu_movil.style.visibility = "hidden";
  }
  desplegado = !desplegado;
});

// mostrar menu
const mq = matchMedia("(min-width:790px)");

mq.addListener((mql) => {
  if (mql.matches) {
    $menu_movil.style.visibility = "visible";
  }
  else{
    $menu_movil.style.visibility = "hidden";

  }
});

// // cambiar imagenes
// const mediaImg = matchMedia("(max-width:790px)");
// mediaImg.addListener((mql) => {
//   if (mql.matches) {
//     alert(mq.matches)
//     document
//       .getElementById("img-3")
//       .setAttribute("src", "./images/mobile/image-soccer-team.jpg");
//   }
// });
