// Defer loading of the resource until it reaches a calculated distance from the viewport
for (let i = 4; i < document.images.length; i++) {
  document.images[i].setAttribute("loading", "lazy");
}

// ---------- Header
// Toggle Menu
const toggleMenu = document.getElementById("toggle-menu"),
  homeList = document.querySelector("#toggle-menu + ul");

let closeMainMenu = 0;

toggleMenu.addEventListener("click", () => {
  closeMainMenu += 1;
  if (closeMainMenu % 2 === 1) homeList.style.display = "flex";
});

toggleMenu.addEventListener("click", () => {
  if (closeMainMenu % 2 === 0) homeList.style.display = "none";
});

// ---------- Landing Section
// Image Slider
const slides = document.querySelectorAll("#landing > img"),
  landingBtns = document.querySelectorAll("#landing .bullets li");
let currentIndex = 0;

function showSlides(n) {
  currentIndex += n;

  if (currentIndex > slides.length - 1) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  slides.forEach((img) => {
    img.classList.remove("active");
  });

  slides[currentIndex].classList.add("active");

  landingBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  landingBtns[currentIndex].classList.add("active");
}

landingBtns.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    slides.forEach((img) => {
      img.classList.remove("active");
    });

    slides[ind].classList.add("active");

    landingBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

// ---------- Portfolio Section
// Shuffle Buttons
const shuffleBtns = document.querySelectorAll("#portfolio .shuffle li"),
  boxImgs = document.querySelectorAll("#portfolio .imgs-container .box");

shuffleBtns.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    const theValue = btn.getAttribute("data-value");

    shuffleBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    shuffleBtns[ind].classList.add("active");

    boxImgs.forEach((box) => {
      box.style.display = "none";
    });

    boxImgs.forEach((box) => {
      if (box.classList.contains(theValue)) {
        box.style.display = "block";
      }
    });
  });
});
// Show Images
boxImgs.forEach((box) => {
  const startModalCom = document.createComment("Start Modal Box"),
    myModal = document.createElement("div"),
    closeTag = document.createElement("span"),
    myImgModal = document.createElement("img"),
    myCaptionModal = document.createElement("p"),
    endModalCom = document.createComment("End Modal Box");

  myModal.className = "modal";
  closeTag.className = "close";
  closeTag.innerHTML = "&times;";
  myImgModal.className = "modal-content";
  myCaptionModal.className = "caption";

  myModal.appendChild(closeTag);
  myModal.appendChild(myImgModal);
  myModal.appendChild(myCaptionModal);

  box.appendChild(startModalCom);
  box.appendChild(myModal);
  box.appendChild(endModalCom);
});

const imgs = document.querySelectorAll("#imgs-container .box > img"),
  modalImgs = document.querySelectorAll("#imgs-container .modal"),
  modalClose = document.querySelectorAll("#imgs-container .modal .close"),
  modalImg = document.querySelectorAll("#imgs-container .modal img"),
  modalCaption = document.querySelectorAll("#imgs-container .modal p");

imgs.forEach((img, ind) => {
  img.alt = `Example - ${ind + 1}`;

  img.addEventListener("click", () => {
    modalImgs[ind].style.display = "block";
    modalImg[ind].src = img.src;
    modalCaption[ind].innerHTML = img.alt;
  });

  modalClose[ind].addEventListener("click", () => {
    modalImgs[ind].style.display = "none";
  });
});

// ---------- Our Skills
// Slider Review
const revCon = document.querySelectorAll("#review-clients .section");

revCon.forEach((section) => {
  let content;
  for (let i = 0; i < 2; i++) {
    content = document.createElement("div");
    content.className = "content";
    section.appendChild(content);
  }
});

const reviewContents = document.querySelectorAll(
  "#review-clients .section .content"
);

reviewContents.forEach((content, ind) => {
  const reviewConImg = document.createElement("div"),
    reviewImg = document.createElement("img"),
    reviewConText = document.createElement("div"),
    reviewText = document.createTextNode(
      "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt."
    ),
    reviewParag = document.createElement("p"),
    reviewParagText = document.createTextNode("John Doe, CEO");

  let format = "avif";

  reviewConImg.className = "image";
  if (ind % 2 === 1) {
    format = "jpg";
  }
  reviewImg.src = `images/skills-0${ind + 1}.${format}`;
  reviewImg.alt = "Person";
  reviewConText.className = "text";

  reviewConImg.appendChild(reviewImg);
  reviewConText.appendChild(reviewText);
  reviewParag.appendChild(reviewParagText);
  reviewConText.appendChild(reviewParag);

  content.appendChild(reviewConImg);
  content.appendChild(reviewConText);
});

const reviewContainers = document.querySelectorAll(
    ".our-skills #review-clients .section"
  ),
  reviewBtns = document.querySelectorAll(
    ".our-skills .testimonials .bullets li"
  );

reviewBtns.forEach((btn, ind) => {
  btn.addEventListener("click", () => {
    reviewBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    reviewBtns[ind].classList.add("active");

    reviewContainers.forEach((container) => {
      container.classList.remove("active");
    });

    reviewContainers[ind].classList.add("active");
  });
});
