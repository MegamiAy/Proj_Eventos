// Categorias
fetch('template/categoriesView.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('categories').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o categorias:', error));