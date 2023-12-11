const container = document.querySelector('.containerStatut');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');

const statutWidth = 70; // Largeur d'un statut (ajuste selon ton design)
const statutMargin = 13; // Marge entre les statuts (ajuste selon ton design)
const numVisibleStatuts = 4; // Nombre de statuts visibles à la fois (ajuste selon ton design)

const totalStatutsWidth = (statutWidth + statutMargin) * numVisibleStatuts;
let scrollPosition = 0;

btnLeft.addEventListener('click', () => {
  scrollPosition -= totalStatutsWidth;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  container.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  scrollPosition += totalStatutsWidth;
  const maxScroll = container.scrollWidth - container.clientWidth;
  if (scrollPosition > maxScroll) {
    scrollPosition = maxScroll;
  }
  container.scrollTo({
    top: 0,
    left: scrollPosition,
    behavior: 'smooth'
  });
});

function updateButtonsVisibility() {
  if (container.scrollLeft === 0) {
    btnLeft.style.display = 'none';
  } else {
    btnLeft.style.display = 'block';
  }

  const maxScroll = container.scrollWidth - container.clientWidth;
  if (container.scrollLeft >= maxScroll) {
    btnRight.style.display = 'none';
  } else {
    btnRight.style.display = 'block';
  }
}

container.addEventListener('scroll', updateButtonsVisibility);
updateButtonsVisibility(); // Pour initialiser la visibilité des boutons au chargement de la page
