document.addEventListener("DOMContentLoaded", () => {
  els = {
    nextImageButtons: document.querySelectorAll(".nextImageButton"),
    previousImageButtons: document.querySelectorAll(".previousImageButton"),
  };

  const imageSets = {
    employdar: [
      "./images/proj-2-img-1.png",
      "./images/proj-2-img-2.png",
      "./images/proj-2-img-3.png",
    ],
    anteautopro: [
      "./images/proj-1-img-1.png",
      "./images/proj-1-img-2.png",
      "./images/proj-1-img-3.png",
      "./images/proj-1-img-4.png",
      "./images/proj-1-img-5.png",
      "./images/proj-1-img-6.jpg",
    ],
  };

  const imageIndexCounter = {
    employdar: 0,
    anteautopro: 0,
  };

  //NEXT IMAGE BUTTON EVENT LISTENER
  for (const nextButton of els.nextImageButtons) {
    nextButton.addEventListener("click", (clickEvent) => {
      const projectCard = nextButton.closest(".project-image-area");
      const imageSet = imageSets[projectCard.dataset.project];
      const currentImage = projectCard.querySelector("a img");

      if (
        imageIndexCounter[projectCard.dataset.project] + 1 <
        imageSet.length
      ) {
        imageIndexCounter[projectCard.dataset.project] += 1;
      } else {
        imageIndexCounter[projectCard.dataset.project] = 0;
      }
      console.log(imageIndexCounter[projectCard.dataset.project]);
      currentImage.src =
        imageSet[imageIndexCounter[projectCard.dataset.project]];
    });
  }

  //PREVIOUS IMAGE BUTTON EVENT LISTENER
  for (const previousButton of els.previousImageButtons) {
    previousButton.addEventListener("click", (clickEvent) => {
      const projectCard = previousButton.closest(".project-image-area");
      const imageSet = imageSets[projectCard.dataset.project];
      const currentImage = projectCard.querySelector("a img");

      if (imageIndexCounter[projectCard.dataset.project] - 1 < 0) {
        imageIndexCounter[projectCard.dataset.project] = imageSet.length - 1;
      } else {
        imageIndexCounter[projectCard.dataset.project] -= 1;
      }
      console.log(imageIndexCounter[projectCard.dataset.project]);
      currentImage.src =
        imageSet[imageIndexCounter[projectCard.dataset.project]];
    });
  }
});
