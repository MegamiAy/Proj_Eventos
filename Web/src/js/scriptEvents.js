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

function search(){
    alert('Estamos trablhando para disponibilizar a função assim que possível!');
}

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


// function pullHeader(){
//     fetch('../view/template/header.html')
//     .then(response => response.text())
//     .then(html => {
//         document.getElementById('header').innerHTML = html;
//     })
//     .catch(error => console.error('Erro ao carregar o cabeçalho:', error));
// }

// window.addEventListener('load', pullHeader);

// function includeHeader() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//                 document.getElementById('header').innerHTML = xhr.responseText;
//             } else {
//                 console.error('Erro ao carregar o cabeçalho:', xhr.status);
//             }
//         }
//     };
//     xhr.open('GET', '../view/template/header.html', true);
//     xhr.send();
// }
// window.addEventListener('load', includeHeader);