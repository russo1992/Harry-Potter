function showPopup(imageSrc, description) {
    var popup = document.getElementById('imagePopup');
    var popupImage = document.getElementById('popupImage');
    var popupDescription = document.getElementById('popupDescription');

    // Define a origem da imagem e a descrição no pop-up
    popupImage.src = imageSrc;
    popupDescription.textContent = description;

    // Exibe o pop-up
    popup.style.display = 'block';
}

// Adiciona um ouvinte de evento para fechar o pop-up quando o mouse sai da área do pop-up
document.getElementById('imagePopup').addEventListener('mouseleave', function() {
    this.style.display = 'none';
});
