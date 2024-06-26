// Função para abrir o menu mobile
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

// Função para rolar os cards
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.category-section');
    sections.forEach(section => {
        const cardsContainer = section.querySelector('.cards-container');
        const prevButton = section.querySelector('.prev');
        const nextButton = section.querySelector('.next');
        let scrollAmount = 0;
        const cardsPerScroll = 3; // Defina quantos cards você quer rolar por vez
        const cardWidth = cardsContainer.scrollWidth / cardsContainer.children.length;
        const scrollStep = cardWidth * cardsPerScroll;
        nextButton.addEventListener('click', function() {
            const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;
            scrollAmount += scrollStep; // Avança cardsPerScroll cards
            if (scrollAmount > maxScrollLeft) {
                scrollAmount = maxScrollLeft;
            }
            cardsContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        prevButton.addEventListener('click', function() {
            scrollAmount -= scrollStep; // Retrocede cardsPerScroll cards
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            cardsContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
});

// Header
fetch('template/headerView.html')
    .then(response => response.text())
    .then(html => {
        // Insira o conteúdo do cabeçalho no elemento com id "header"
        document.getElementById('header').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

// Footer
fetch('template/footerView.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('footer').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o rodapé:', error));