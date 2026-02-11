const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Gallery elements
const lovePhoto = document.querySelector(".love-photo");
const loveQuote = document.querySelector(".love-quote");
const nextBtn = document.querySelector(".js-next-btn");

// Add your photos + quotes here (update paths)
const galleryItems = [
  { img: "photos/_73A9167.JPG", quote: "Quote 1 here" },
  { img: "photos/IMG_4069.jpeg", quote: "Quote 2 here" },
  { img: "photos/IMG_4205.jpeg", quote: "Quote 3 here" },
  { img: "photos/IMG_4280.jpeg", quote: "Quote 4 here" },
  { img: "photos/RAM08220.jpg", quote: "Quote 5 here" },
];


let currentIndex = 0;

function showGalleryItem(index) {
  const item = galleryItems[index];
  lovePhoto.src = item.img;
  loveQuote.textContent = item.quote;
}

// change the position of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showGalleryItem(currentIndex);
});

// yes button functionality + animation
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "block";

  setTimeout(() => {
    heartLoader.style.display = "none";

    resultContainer.style.display = "block";
    resultContainer.classList.add("show");

    // start video
    if (gifResult && typeof gifResult.play === "function") {
      gifResult.play();
    }

    // show first quote+photo
    currentIndex = 0;
    showGalleryItem(currentIndex);
  }, 3000);
});
