const tela1 = document.querySelector(".tela-1");
const tela2 = document.querySelector(".tela-2");
const notas = document.querySelectorAll(".nota");
const notaFinal = document.querySelector(".nota-final");
let avaliacaoValor;

for(let i = 0;i < notas.length;i++) {
    notas[i].addEventListener('click', () => {
        clearButtonFixado();
        notas[i].classList.add('active')
        avaliacaoValor = notas[i].innerText;
    });
}

function clearButtonFixado() {
    for(let i = 0;i < notas.length;i++) {
        notas[i].classList.remove('active');
    }
}

document.addEventListener('click',(e) => {
    let el = e.target;
    if(el.classList.contains('btn-enviar')){
        if(tela2.classList.contains("display-none") && avaliacaoValor){
            tela1.classList.add("display-none");
            tela2.classList.remove("display-none");
            notaFinal.innerText = avaliacaoValor;
        }  
    }
});