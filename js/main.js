import { renderInitialPhotos, loadMorePhotos } from "./thumbnail-render.js";
import { checkPosition } from "./infinite-scroll.js";
import { throttle } from "./utils.js";

const loaderPhotosButton = document.querySelector(".upload-button");
document.addEventListener("DOMContentLoaded", () => {
  renderInitialPhotos();
  loaderPhotosButton.addEventListener("click", loadMorePhotos);

  window.addEventListener("scroll", throttle(checkPosition, 250));
  window.addEventListener("resize", throttle(checkPosition, 250));
});
loaderPhotosButton.removeEventListener("click", loadMorePhotos);
