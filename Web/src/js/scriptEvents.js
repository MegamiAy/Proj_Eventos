// Categorias
fetch('template/categoriesView.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('categories').innerHTML = html;
    })
    .catch(error => console.error('Erro ao carregar o categorias:', error));

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

        // Função para dispositivos móveis
        if (window.innerWidth <= 767) {
            let touchStartX = 0;
            let touchEndX = 0;

            cardsContainer.addEventListener('touchstart', function(event) {
                touchStartX = event.changedTouches[0].screenX;
            });

            cardsContainer.addEventListener('touchmove', function(event) {
                touchEndX = event.changedTouches[0].screenX;
            });

            cardsContainer.addEventListener('touchend', function() {
                const maxScrollLeft = cardsContainer.scrollWidth - cardsContainer.clientWidth;
                const cardScrollStep = cardWidth; // Rola um card por vez

                if (touchEndX < touchStartX) { // Rolar para a esquerda
                    scrollAmount += cardScrollStep;
                    if (scrollAmount > maxScrollLeft) {
                        scrollAmount = maxScrollLeft;
                    }
                } else if (touchEndX > touchStartX) { // Rolar para a direita
                    scrollAmount -= cardScrollStep;
                    if (scrollAmount < 0) {
                        scrollAmount = 0;
                    }
                }

                cardsContainer.scrollTo({
                    top: 0,
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            });
        }
    });
});
