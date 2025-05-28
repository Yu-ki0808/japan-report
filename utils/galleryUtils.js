export function adjustGallery() {
    const gallery = document.querySelector('.gallery');
    const container = document.querySelector('.gallery-container');
    const images = gallery.querySelectorAll('img');
  
    if (images.length === 0) return;
  
    const imageWidth = images[0].offsetWidth;
    const gap = parseInt(getComputedStyle(gallery).gap);
    const containerWidth = container.offsetWidth;
    const imagesPerRow = Math.floor((containerWidth + gap) / (imageWidth + gap));
    gallery.style.width = `${imagesPerRow * (imageWidth + gap) - gap}px`;
  }