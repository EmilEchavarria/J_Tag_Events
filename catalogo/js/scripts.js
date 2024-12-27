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

// Caracteristicas


document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los botones con la clase 'toggle-button'
    const toggleButtons = document.querySelectorAll('.toggle-button');
  
    // Iterar sobre cada botón para añadir el evento de click
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Obtener el contenido asociado al botón (el siguiente hermano)
        const content = button.nextElementSibling;
  
        // Verificar si el contenido está visible o no
        if (content.style.maxHeight && content.style.maxHeight !== "0px") {
          // Si ya está visible, ocultarlo
          content.style.maxHeight = "0";
        } else {
          // Si no está visible, mostrarlo
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });


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

// Efecto hover sobre los artículos
const article = document.querySelectorAll('.article');

article.forEach(article => {
    // Al pasar el cursor sobre el artículo
    article.addEventListener('mouseover', () => {
        article.style.transform = 'scale(1.02)';  // Aplica el zoom
        article.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';  // Suaviza la transición
        article.style.boxShadow = '0 4px 10px rgba(7, 98, 255, 0.26)';  // Añade sombra
        article.style.backgroundColor = '#5a718e';  // Cambia el color de fondo
    });

    // Cuando el cursor sale del artículo
    article.addEventListener('mouseout', () => {
        article.style.transform = 'scale(1)';  // Vuelve al tamaño original
        article.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';  // Restaura la sombra original
        article.style.backgroundColor = '#f8f8fc';  // Restaura el color original
    });
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
document.querySelector('#morado').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const targetId = this.getAttribute('href'); // Obtiene el href completo (por ejemplo, "/index.html#nosotros")
    
    // Redirige a la página y luego desplaza a la sección
    window.location.href = targetId;
});

