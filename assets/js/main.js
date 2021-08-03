const intro = $(".wrapper-intro");
const introDetails = $(".intro-details");
const video = $(".video");
const overlay = $(".wrapper-overlay");
const nav = $(".fixed-nav");
const navMobile = $(".fixed-nav--mobile");

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

const sections = $$("section");

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

const listNav = $$(".btn-navigate");

const handleNav = () => {
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

const targets = $$("[data-observer]");
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
