const date = new Date();
const nowHours = date.getHours();

function isOpen(){
    let isOpenLi = document.querySelector('.isOpen');

    if(nowHours >= 0 && nowHours < 8){
        isOpenLi.innerHTML = `<h2>Fechado</h2>`;
        isOpenLi.classList.add('fechado');
    }else if(nowHours >= 8 && nowHours < 18){
        isOpenLi.innerHTML = `<h2>Aberto</h2>`;
        isOpenLi.classList.add('aberto');
    }else if(nowHours >= 18){
        isOpenLi.innerHTML = `<h2>Fechado</h2>`;
        isOpenLi.classList.add('fechado');
    }
}

isOpen();