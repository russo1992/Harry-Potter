// whatss.js

const falante = document.getElementById('falante');
const textoFala = document.getElementById('textoFala');


falante.addEventListener('mouseover', () => {
  falar("Seja bem vindo, ao meu Mundo de mágia!");
});

falante.addEventListener('mouseout', () => {
    textoFala.style.display = 'none';
  });

  function falar(texto) {
    textoFala.innerText = texto;
    textoFala.style.display = 'block'

  // Lógica para animação usando GSAP
  gsap.to("#falante", { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });

}


  
