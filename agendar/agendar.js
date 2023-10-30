let prox_01 = document.getElementById('prox_01');
let prox_02 = document.getElementById('prox_02');
let prox_03 = document.getElementById('prox_03');
let container_01 = document.querySelector('.container_01');
let container_02 = document.querySelector('.container_02');
let container_03 = document.querySelector('.container_03');


prox_01.addEventListener('click', () => {
    var servico = document.getElementById('servicos').value;

    if(container_01.classList.contains('ativado')){
        container_01.classList.remove('ativado');
        container_02.classList.add('ativado');
    }

    var data;
    prox_02.addEventListener('click', () => {
        data = document.getElementById('data').value;
        if(container_02.classList.contains('ativado')){
            container_02.classList.remove('ativado');
            container_03.classList.add('ativado');
        }

    })

        prox_03.addEventListener('click', (e) => {
            var turnos = document.getElementById('turno').value;
            window.open(`https://wa.me//5593991463178?text=Gostaria%20de%20agendar%20o%20serviço%20de%20${servico}%20${data}%20no%20turno%20da%20${turnos}`);
            console.log(turnos)

        })
    

})





