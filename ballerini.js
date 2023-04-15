var meuMenu = document.getElementById("listamenu");
var botao = document.getElementById("burguer");

botao.addEventListener("click", clickMenu);

function clickMenu() {
  if (meuMenu.style.display == "block") {
    if (window.innerWidth < 900) {
      meuMenu.style.display = "none";
    } else {
      meuMenu.style.display = "block";
    }
  } else {
    meuMenu.style.display = "block";
  }
}
