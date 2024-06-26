// funções globais
let currentSlide = 0;
let slideInterval;

// mostrar o slide
function ShowsSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const indicators = document.querySelectorAll('.indicator');
    // identificar o slide atual
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    // mover para o slide atual
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
    // atualizar a localização do slide atual, as bolinhas
    indicators.forEach((indicator, i) => {
        if (i === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// mudança de slide a cada 3 segundos
function startSlideShows() {
    slideInterval = setInterval(() => {
        ShowsSlide(currentSlide + 1);
    }, 3000);
}
function stopSlideShows() {
    clearInterval(slideInterval);
}
document.addEventListener('DOMContentLoaded', () => {
    ShowsSlide(currentSlide); // mostra na teal
    startSlideShows();    // incia a movimentação
    // faz os indicadores, as bolinhas funcionarem
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            stopSlideShows(); 
            ShowsSlide(i);
            startSlideShows();
        });
    });
});
