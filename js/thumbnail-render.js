const api_key =
  "live_azFeKV0EX0jdtDyGfukGvM9CUT8VBD8z7bS2YZvumGuZmi78e0J3RAJGJvOHqFme";

async function fetchCatPhotos(limit) {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
      {
        headers: {
          "x-api-key": api_key,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function renderPhotos(photos) {
  const picture = document.querySelector(".photo-list"); //контейнер для вставки изображений
  const templateFragment = document.querySelector("#photos").content;
  const template = templateFragment.querySelector("li");
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const element = template.cloneNode(true);
    const image = element.querySelector(".photo-img");
    image.src = photo.url;

    fragment.appendChild(element);
  });

  picture.appendChild(fragment);
}

async function renderInitialPhotos() {
  const initialPhotos = await fetchCatPhotos(12);

  console.log("Загружено фотографий:", initialPhotos.length);
  renderPhotos(initialPhotos);
}

async function loadMorePhotos() {
  const morePhotos = await fetchCatPhotos(5);
  renderPhotos(morePhotos);
}
renderInitialPhotos();
export { renderInitialPhotos, loadMorePhotos };
