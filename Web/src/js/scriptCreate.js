// Deixa o file da imagem mais bonitinho
document.getElementById('img1').addEventListener('change', function() {
    const fileName = this.files[0].name;
    document.querySelector('.file-label').textContent = fileName;
});