// EFEITO SCROLL-HEADER
window.addEventListener('scroll', function(){
    let header = document.querySelector('header');
    if(window.scrollY > 0){
        header.style.backgroundColor = "#0a031b60";
        header.style.backdropFilter = "blur(10px)"; 
    }else{
        header.style.backgroundColor = "#0A031B";
        header.style.backdropFilter = "blur(0px)"; 
    }
})

// EFEITO SCROLL OPACIDADE
function efeitoEscrita(){
    let categoria = document.querySelectorAll('.categoria');
    let frase = document.querySelector('.salao h1');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            frase.style.opacity = "100%";
        }else{
            frase.style.opacity = "0";
        }
    })
}
efeitoEscrita();


// HEADER-MOBILE FUNCIONALIDADES
let navegationMobile = document.querySelector('.navegationMobile');
let menu = document.querySelector('.menu');

menu.addEventListener('click', () => {
    if(navegationMobile.classList.contains('active')){
        navegationMobile.classList.remove('active')
        navegationMobile.style.display = 'none';
    }else{
        navegationMobile.classList.add('active');
        navegationMobile.style.display = 'block';
    }
})