import { loadMorePhotos } from "./thumbnail-render.js";

function checkPosition() {
  const height = document.body.offsetHeight;
  const screenHeight = window.innerHeight;
  const scrolled = window.scrollY;
  const threshold = height - screenHeight / 4;
  const position = scrolled + screenHeight;

  if (position >= threshold) {
    loadMorePhotos();
  }
}
export { checkPosition };
