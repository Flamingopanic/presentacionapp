
document.addEventListener("DOMContentLoaded", function() {
    const userAgent = navigator.userAgent.toLowerCase();
    const botonDescarga = document.getElementById('boton-descarga');
    const qrCodeCanvas = document.getElementById('qr-code');
    const mensajeDispositivo = document.getElementById('mensaje-dispositivo');
    const apkUrl = "https://drive.google.com/uc?id=1JmmwyuDNe-j91LLIceVzlFrTw03KvQMs&export=download"; 
  
    if (/mobile|android|iphone|ipad|ipod/.test(userAgent)) {
      mensajeDispositivo.textContent = "Estás accediendo desde un dispositivo móvil.";
      botonDescarga.style.display = "inline-block";
      botonDescarga.onclick = () => window.location.href = apkUrl;
    } else {
      mensajeDispositivo.textContent = "Estás accediendo desde un dispositivo de escritorio.";
      qrCodeCanvas.style.display = "block";
      QRCode.toCanvas(qrCodeCanvas, apkUrl, function(error) {
        if (error) console.error(error);
      });
    }
  });

  const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Ajustar el tamaño del carrusel al redimensionar la ventana
window.addEventListener('resize', updateCarousel);

  