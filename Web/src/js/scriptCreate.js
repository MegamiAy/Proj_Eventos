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