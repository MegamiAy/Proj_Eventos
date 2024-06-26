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
