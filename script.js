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

heroImage.src = hero[0].image;
heroH1.innerHTML = hero[0].title;
heroP.innerHTML = hero[0].content;