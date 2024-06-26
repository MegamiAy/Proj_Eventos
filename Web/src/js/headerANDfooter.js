// Header
fetch('template/headerView.html')
    .then(response => response.text())
    .then(html => {
        // Insira o conteúdo do cabeçalho no elemento com id "header"
        document.getElementById('header').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

// Função para abrir e fechar o menu mobile
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../src/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../src/img/close_white_36dp.svg";
    }
}

// Função para pesquisar
function search(){
    alert('Estamos trablhando para disponibilizar a função assim que possível!');
}



// Footer
fetch('template/footerView.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('footer').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o rodapé:', error));