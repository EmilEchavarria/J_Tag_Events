// Espera a que la página esté completamente cargada
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'animate'
    const animateElements = document.querySelectorAll('.animate');

    // Añade la clase 'active' a los elementos para iniciar la animación
    animateElements.forEach(element => element.classList.add('active'));
});



function toggleClick(imgElement) {
    const article = imgElement.closest('.article');  // Encuentra el contenedor más cercano '.article'
    article.classList.toggle('clicked');  // Activa o desactiva la clase 'clicked' en el artículo

    // Evita el comportamiento por defecto en dispositivos móviles
    event.preventDefault();
}




let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual; //200
});

// Menu
// Menu
let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;
let hamburguer = document.querySelectorAll(".hamburguer")[0];

hamburguer.addEventListener("click", function() {
    if (semaforo) {
        hamburguer.style.color = "#fff";
        semaforo = false;
    } else {
        hamburguer.style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos");
});

// Close menu after clicking on a link
document.querySelectorAll(".enlaces-header a").forEach(link => {
    link.addEventListener("click", () => {
        enlacesHeader.classList.remove("menudos");
        hamburguer.style.color = "#000"; // Opcionalmente restablece el color
        semaforo = true; // Restablece el semáforo a verdadero
    });
});

// Obtener elementos
// Seleccionar los elementos
const videoPlayer = document.getElementById('videoPlayer');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.querySelector('.close');

// Abrir el modal al hacer clic en el video
videoPlayer.addEventListener('click', () => {
  videoModal.style.display = 'flex';
  modalVideo.play();
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener('click', () => {
  videoModal.style.display = 'none';
  modalVideo.pause();
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    modalVideo.pause();
  }
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".box h2");

    const updateCount = (counter, intervalTime) => {
        const target = +counter.textContent.replace('+', ''); // Convertir texto en número, sin el símbolo "+"
        let count = 0;
        const increment = Math.ceil(target / 100); // Calcular el incremento

        const animate = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = '+' + target; // Añadir el símbolo "+" al inicio
                clearInterval(animate); // Detener la animación
            } else {
                counter.textContent = count;
            }
        }, intervalTime); // El intervalo ahora es dinámico según el contador
    };

    const options = {
        root: null, // Usar el viewport como raíz
        rootMargin: '0px', // Margen de 0px alrededor del viewport
        threshold: 0.5 // El 50% del elemento debe ser visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Establecer intervalos de tiempo
                const intervalTime = entry.target.textContent === "+5" ? 90 : 15; // Reducir el intervalo para +5
                updateCount(entry.target, intervalTime);
                observer.unobserve(entry.target); // Deja de observar el elemento después de la animación
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter); // Comienza a observar cada elemento <h2>
    });
});

// Desplazamiento suave al hacer click en el enlace
document.querySelector('#morado').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetId = this.getAttribute('href'); // Obtiene el ID del destino
    const targetElement = document.querySelector(targetId); // Selecciona el elemento destino
    
    // Desplazamiento suave hacia la sección de la galería
    targetElement.scrollIntoView({
        behavior: 'smooth' // Efecto de desplazamiento suave
    });
});
