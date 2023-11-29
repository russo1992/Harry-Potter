
function aumentarImagem(element) {
    element.querySelector('.resumo').style.display = 'block';
    element.querySelector('img').style.transform = 'scale(1.2)';
  }
  
  function reduzirImagem(element) {
    element.querySelector('.resumo').style.display = 'none';
    element.querySelector('img').style.transform = 'scale(1)';
  }
  