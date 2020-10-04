let hero = [
  {
    image: "./images/desktop-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    content:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine formand function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "./images/desktop-image-hero-2.jpg",
    title: "We are available all across the world",
    content:
      "all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "./images/desktop-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    content:
      " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let heroImage = document.getElementById("hero_im");
let heroH1 = document.getElementById("hero_h1");
let heroP = document.getElementById("hero_p");
let ham = document.getElementById("hamburger");
let arrLeft = document.querySelector(".arr-left");
let arrRigth = document.querySelector(".arr-rigth");

let index = 0;

heroImage.src = hero[0].image;
heroH1.innerHTML = hero[0].title;
heroP.innerHTML = hero[0].content;

function hamClicker() {
  const navbar = document.querySelector(".navbar");

  if (menushow) {
    navbar.classList.remove("show");
    ham.src = "./images/icon-hamburger.svg";

    menushow = false;

    console.log("hide");
  } else {
    navbar.classList.add("show");
    menushow = true;
    ham.src = "./images/icon-close.svg";
    console.log("show");
  }
}

let menushow = false;
ham.addEventListener("click", hamClicker);

const leftClic = () => {
  if (--index < 0) {
    heroImage.src = hero[0].image;
    heroH1.innerHTML = hero[0].title;
    heroP.innerHTML = hero[0].content;
    index = 0;
  } else {
    heroImage.src = hero[index].image;
    heroH1.innerHTML = hero[index].title;
    heroP.innerHTML = hero[index].content;
  }
  console.log("left");
};

const rigthClic = () => {
  if (++index > 2) {
    heroImage.src = hero[2].image;
    heroH1.innerHTML = hero[2].title;
    heroP.innerHTML = hero[2].content;
    index = 2;
  } else {
    heroImage.src = hero[index].image;
    heroH1.innerHTML = hero[index].title;
    heroP.innerHTML = hero[index].content;
  }
  console.log("rigth");
};

arrLeft.addEventListener("click", leftClic);
arrRigth.addEventListener("click", rigthClic);
