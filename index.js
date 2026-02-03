let currentImageIndex = 0;

const images = document.querySelectorAll(".galleryimage");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-img");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentImageIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImage.src = src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex =0) {
    currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  lightboxImage.src = images[currentImageIndex].src;
}
