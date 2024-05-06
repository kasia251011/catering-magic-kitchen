const imgCountEl = document.getElementById("img-count");
const hiddenImgEls = document.querySelectorAll("#galeria .hidden a");

imgCountEl.textContent = hiddenImgEls.length;

lightGallery(document.getElementById('galeria'), {
  plugins: [lgZoom, lgThumbnail],
  selector: "a",
  speed: 500,
  download: false,
});