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




/**window.addEventListener('scroll', ()=>{
    const article = document.querySelector('.art') ;
    const posicion = article.getBoundingClientRect().top;
    console.log(posicion);
    let screen= window.innerHeight/ 1.8;
    if(posicion < screen){
        article.setAttribute('class' ,'active' )
    }else{
        article.setAttribute('class' ,'art' );
    }
})**/