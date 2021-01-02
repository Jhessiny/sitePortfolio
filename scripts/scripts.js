const buttonRipple = document.querySelector(".btn-ripple");

buttonRipple.addEventListener("click", function (e) {
  const buttonTop = e.target.getBoundingClientRect().top + window.scrollY;
  const buttonLeft = e.target.getBoundingClientRect().left;
  console.log(buttonTop, buttonLeft);
  let x = e.clientX - buttonLeft;
  let y = e.clientY - buttonTop;
  console.log(x, y);
  let ripples = document.createElement("span");
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  setTimeout(() => {
    ripples.remove();
  }, 900);
});

const targetScroll = document.querySelectorAll("[data-anime]");
const targetScroll2 = document.querySelectorAll("[data-anime-cover]");

function animeScroll(elements, classAnime) {
  const windowTop = window.pageYOffset + window.innerHeight * 0.75;
  elements.forEach(function (element) {
    let elementTop = element.getBoundingClientRect().top + window.scrollY;
    if (windowTop > elementTop) {
      element.classList.add(classAnime);
    } else {
      element.classList.remove(classAnime);
    }
  });
}

// animeScroll();

window.addEventListener("scroll", function () {
  animeScroll(targetScroll, "animate1");
  animeScroll(targetScroll2, "animate2");
});
