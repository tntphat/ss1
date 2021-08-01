const intro = document.querySelector(".wrapper-intro");
const introDetails = document.querySelector(".intro-details");
const video = document.querySelector(".video");
const overlay = document.querySelector(".wrapper-overlay");
const nav = document.querySelector(".fixed-nav");
const navMobile = document.querySelector(".fixed-nav--mobile");

// Handle video play and pause
var first = 0;
const handleFirstTime = () => {
  video.currentTime = 0;
  first = 1;
  nav.style.transform = "translate(-100%,-50%)";
  navMobile.style.transform = "translate(0,100%)";
  overlay.style.display = "none";
  intro.style.display = "none";
  video.onplay = () => {
    overlay.style.display = "none";
    intro.style.display = "none";
    nav.style.transform = "translate(-100%,-50%)";
    navMobile.style.transform = "translate(0,100%)";
  };
};
intro.addEventListener("click", handleFirstTime);
intro.onclick = () => {
  video.muted = false;
  video.play();
  intro.removeEventListener("click", handleFirstTime);
};

video.onpause = () => {
  overlay.style.display = "block";
  intro.style.display = "flex";
  nav.style.transform = "translate(0%,-50%)";
  navMobile.style.transform = "translate(0,0%)";
};

// Handle active navigate

const sections = document.querySelectorAll("section");
console.log(sections);

let options = {
  rootMargin: "0px",
};

const addClass = (el) => {
  if (!el.classList.contains("is-visible")) {
    el.classList.add("is-visible");
  }
};

const removeClass = (el) => {
  if (el.classList.contains("is-visible")) {
    el.classList.remove("is-visible");
  }
};

const listNav = document.querySelectorAll(".btn-navigate");
console.log(listNav);

const handleNav = () => {
  console.log(targets[0].classList.contains("is-visible"));
  if (!targets[0].classList.contains("is-visible") && first) video.pause();
  targets.forEach((ele, ind) => {
    if (ele.classList.contains("is-visible")) {
      listNav[ind].classList.add("btn-navigate--active");
      listNav[ind + 4].classList.add("btn-navigate--active");
    } else {
      listNav[ind].classList.remove("btn-navigate--active");
      listNav[ind + 4].classList.remove("btn-navigate--active");
    }
  });
};

const targets = document.querySelectorAll("[data-observer]");
console.log(targets);
var observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry, ind) => {
    if (entry.isIntersecting) {
      addClass(entry.target);
    } else {
      removeClass(entry.target);
    }
    handleNav();
  });
}, options);
targets.forEach((sect) => {
  observer.observe(sect);
});
