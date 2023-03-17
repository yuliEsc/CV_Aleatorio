//oscuro - claro
i=0

const temaOsc = () => {
    document.querySelector('body').setAttribute('class' ,'osc' );
    document.querySelector('#icon').setAttribute('class' ,'fa fa-sun-o' );
    while (i<4){
    document.querySelector('.oscuro').setAttribute('class' ,'claroborde');
    i=i+1
    }
    i=0
}
const temaClar = () => {
    document.querySelector('body').setAttribute('class' ,'claro' );
    document.querySelector('#icon').setAttribute('class' ,'fa fa-moon-o' );
    while (i<4){
        document.querySelector('.claroborde').setAttribute('class' ,'oscuro');
        i=i+1
        }
    i=0
}

const cambio = () => {
    document.querySelector('#icon').getAttribute('class') === 'fa fa-moon-o' ?
    temaOsc() : temaClar();
}

//scroll

const boxes = document.querySelectorAll('.art');
  
window.addEventListener('scroll', sections);

sections();

function sections(){
    const disparador = window.innerHeight / 1.5;
    
    boxes.forEach( box  => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < disparador){
            box.classList.add('active');
        } else{
            box.classList.remove('active');
        }
    });
}

function ocultar(){
    //compara si la fecha de arriba esta activada
    if (document.getElementById("up").style.display=="block"){
        //oculta flechas para arriba y muestra la de abajo 
        document.getElementById("up").style.display="none"
        document.getElementById("down").style.display="block"
        //oculta seccion
        document.getElementById("izq").style.display="none"
        document.getElementById("izq").style.transform="scaleY(-200px)"
    }else{
        //muestra flechas para arriba y oculta la de abajo 
        document.getElementById("down").style.display="none"
        document.getElementById("up").style.display="block"
        //muestra seccion
        document.getElementById("izq").style.display="block"
        document.getElementById("izq").style.transform="scaleY(1px)"
    }
    

}