const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const nav = document.querySelector(".navbar");
openBtn.addEventListener("click", () => {
  nav.classList.add("show");
});
closeBtn.addEventListener("click", () => {
  nav.classList.remove("show");
});
const text = document.querySelector("#text");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const animation = anime.timeline({
  targets: "#text span",
  easeing: "easeInOutExpo",
  loop: false,
});
animation
  .add({
    rotate: function () {
      return anime.random(-360, 360);
    },
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    opacity: 0,
    duration: 0,
  })
  .add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: 3000,
    opacity: 1,
    delay: anime.stagger(20),
  });
const dog = document.querySelector("#dog");
dog.innerHTML = dog.textContent.replace(/\S/g, "<span>$&</span>");
const animation1 = anime.timeline({
  targets: "#dog span",
  easeing: "easeInOutExpo",
  loop: false,
});
animation1
  .add({
    rotate: function () {
      return anime.random(-360, 360);
    },
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    opacity: 0,
    duration: 0,
  })
  .add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: 3000,
    opacity: 1,
    delay: anime.stagger(20),
  });
