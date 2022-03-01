
const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto')

// Recorro todos los puntos.
punto.forEach (( cadaPunto, i)=> {
    // Asigno un click a cada punto.
    punto[i].addEventListener('click',()=>{
        // Guardo la posición del punto.
        let posicion = i;
        // Calculo el espacio que desplazarse el contenedor con las imágenes.
        let operacion = posicion * -50;
        
        grande.style.transform = `translateX(${ operacion }%)`;
    	// Recorro todos los puntos.
        punto.forEach( (cadaPunto, i)=>{
            // Quito la clase activo a todos los botones para que cambie de color con sass.
            punto[i].classList.remove('activo');
        })
        // Añado la clase activo al botón pulsado.
        punto[i].classList.add('activo');
    })
})