// =====================================
// JS COMÚN A TODAS LAS PÁGINAS (US-01)
// =====================================

// Menú hamburguesa en móviles
const botonMenu = document.getElementById('boton-menu');
const listaNav = document.getElementById('lista-nav');

if (botonMenu) {
  botonMenu.addEventListener('click', function () {
    listaNav.classList.toggle('abierto');
  });
}

// Submenús: en móvil se abren con clic (en escritorio usan hover)
document.querySelectorAll('.tiene-submenu .boton-submenu').forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    if (window.innerWidth <= 700) {
      e.preventDefault();
      boton.parentElement.classList.toggle('abierto');
    } else {
      // En escritorio, el clic del botón lleva a la página principal de la sección
      // (opcional: poné acá un window.location si querés que navegue)
    }
  });
});

// Resaltado de la sección activa según la página actual
const paginaActual = window.location.pathname.split('/').pop();
document.querySelectorAll('#lista-nav > li').forEach(function (li) {
  const enlace = li.querySelector('a');
  if (enlace && enlace.getAttribute('href').split('#')[0] === paginaActual) {
    li.classList.add('activo');
  }
});

