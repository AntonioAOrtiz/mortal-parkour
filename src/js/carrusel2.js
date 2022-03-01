// Comentarios en Carrusel 1.
const grande2 = document.querySelector('.grande2');
const punto2 = document.querySelectorAll('.punto2')


punto2.forEach (( cadaPunto, i)=> {
    punto2[i].addEventListener('click',()=>{

        let posicion = i;
        let operacion = posicion * -33;

        grande2.style.transform = `translateX(${ operacion }%)`;

        punto2.forEach( (cadaPunto, i)=>{
            punto2[i].classList.remove('activo2');
        })
        punto2[i].classList.add('activo2');
    })
})