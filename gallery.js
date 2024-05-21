const imgCountEl = document.getElementById("img-count");
const hiddenImgEls = document.querySelectorAll("#galeria .hidden a");
const hiddenContainerImgElsOnSmall =
  document.querySelector(".sm-hidden-images");

function countHiddenImages() {
  if (window.getComputedStyle(hiddenContainerImgElsOnSmall).display == "none") {
    imgCountEl.textContent =
      hiddenImgEls.length + hiddenContainerImgElsOnSmall.children.length;
  } else {
    imgCountEl.textContent = hiddenImgEls.length;
  }
}

countHiddenImages();

lightGallery(document.getElementById("galeria"), {
  plugins: [lgZoom, lgThumbnail],
  selector: "a",
  speed: 500,
  download: false,
});

addEventListener("resize", () => {
  countHiddenImages();
});
