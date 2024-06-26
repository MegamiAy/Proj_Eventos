//Header
fetch('Web/view/template/header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('header').innerHTML = html;
})
.catch(error => console.error('Erro ao carregar o cabeçalho:', error));

//Footer
fetch('Web/view/template/footer.html')
.then(response => response.text())
.then(html => {
    document.querySelector('footer').innerHTML = html;
})
.catch(error => console.error('Erro ao carregar o rodapé:', error));

// Função para abrir e fechar o menu mobile
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Web/src/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Web/src/img/close_white_36dp.svg";
    }
}

// Função para pesquisar
function search(){
    alert('Estamos trablhando para disponibilizar a função assim que possível!');
}

// Função slides
let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function() {
    nextImage();
}, 5000);
function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }    
    document.getElementById("radio"+count).checked = true;
}