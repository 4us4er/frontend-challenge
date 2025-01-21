document.querySelectorAll(".image-container").forEach((container) => {
  const heart = container.querySelector(".heart");
  const defaultHeart = heart.style.backgroundImage;
  const hoverHeart = heart.dataset.hover;

  container.addEventListener("mouseenter", () => {
    heart.style.backgroundImage = `url(${hoverHeart})`;
  });

  container.addEventListener("mouseleave", () => {
    heart.style.backgroundImage = defaultHeart;
  });
});
