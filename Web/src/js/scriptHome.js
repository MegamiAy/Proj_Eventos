function menuShows() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "Web/src/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "Web/src/img/close_white_36dp.svg";
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
