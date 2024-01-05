gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e),
  selectAll = (e) => document.querySelectorAll(e),
  mainNavLinks = gsap.utils.toArray(".menu_btn span"),
  NavLinksItem = gsap.utils.toArray(".nav-link_item"),
  insightLinksItem = gsap.utils.toArray(".insights-link"),
  bigLinksItem = gsap.utils.toArray(".link-big"),
  footerLinksItem = gsap.utils.toArray(".footer-link");
let menuToogle = select(".nav-btn-wrap"),
  navBar = select(".nav"),
  logoWrap = select(".logo-wrapper"),
  lastScroll = 0;
const defaultOffset = 0,
  header = document.querySelector(".nav"),
  scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop,
  containHide = () => header.classList.contains("hide");
function navColorBg() {
  ScrollTrigger.create({
    trigger: "[hero]",
    start: "bottom top",
    onEnter: function () {
      navBar.classList.add("white-bg"), navBar.classList.remove("nav-for-dark");
    },
    onEnterBack: function () {
      navBar.classList.remove("white-bg"), navBar.classList.add("nav-for-dark");
    },
  }),
    gsap.utils.toArray("[section-light]").forEach((e) => {
      ScrollTrigger.create({
        trigger: e,
        start: "top 10%",
        end: "bottom 10%",
        onEnter: function () {
          document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
            document
              .querySelector(".nav-btn-wrap")
              .classList.remove("dark-nav");
        },
        onEnterBack: function () {
          document.querySelector(".logo-wrapper").classList.remove("dark-nav"),
            document
              .querySelector(".nav-btn-wrap")
              .classList.remove("dark-nav");
        },
      });
    });
}
window.addEventListener("scroll", () => {
  scrollPosition() > lastScroll &&
  !containHide() &&
  scrollPosition() > defaultOffset
    ? header.classList.add("hide")
    : scrollPosition() < lastScroll &&
      containHide() &&
      header.classList.remove("hide"),
    (lastScroll = scrollPosition());
});
const menuOpen = gsap.timeline({ paused: "true", reversed: "true" });
function menuClick() {
  menuOpen.reversed() ? menuOpen.play() : menuOpen.reverse();
}
function moveLogoPattern() {
  let e = gsap.timeline({
    scrollTrigger: {
      id: "Pattern",
      trigger: ".we-do_section",
      start: "top bottom",
      end: "bottom+=50% top",
      scrub: 2,
    },
  });
  e.to(".call-bg-logo-wrap", { xPercent: 40, transformOrigin: "right center" });
}
function moveLogoEmeil() {
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".services_email-wrapper",
      start: "top bottom",
      end: "bottom top-=200%",
      scrub: 1,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: -25 });
}
function init() {
  navColorBg(), moveLogoPattern(), moveLogoEmeil();
}
menuOpen.to(".nav_open", { display: "flex" }),
  menuOpen.to(
    ".menu_btn",
    { duration: 0.3, yPercent: -100, ease: "none" },
    "0"
  ),
  menuOpen.from(
    ".nav_open",
    {
      duration: 1,
      y: "-100%",
      ease: "power.out",
      onStart: () => {
        navBar.classList.contains("active-menu") ||
          navBar.classList.add("active-menu");
      },
      onReverseComplete: () => {
        navBar.classList.contains("active-menu") &&
          navBar.classList.remove("active-menu");
      },
    },
    "0"
  ),
  menuToogle.addEventListener("click", menuClick),
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      drag: "free",
      gap: "1.94rem",
      autoWidth: !0,
      arrows: !1,
      pagination: !1,
    }).mount();
  });
let mm = gsap.matchMedia();
function cursor() {
  var e = document.querySelectorAll(".splide"),
    t = document.querySelectorAll(".works-link_current.project"),
    r = document.getElementById("cursor");
  document.querySelector(".cursor.drag-cursor");
  e.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      r.classList.add("drag-cursor");
    });
  }),
    t.forEach(function (e) {
      e.addEventListener("mouseenter", function () {
        r.classList.toggle("drag-cursor");
      }),
        e.addEventListener("mouseleave", function () {
          r.classList.toggle("drag-cursor");
        });
    }),
    document
      .querySelector(".splide")
      .addEventListener("mouseleave", function () {
        r.classList.remove("drag-cursor");
      });
}
mm.add("(min-width: 992px)", () => {
  cursor();
  let e = selectAll(".splide__slide");
  var t = selectAll(".image img");
  gsap.set(t, { scale: 1.1, transformOrigin: "center center" }),
    e.forEach((e) => {
      var t = e.querySelector(".image img");
      let r = e.querySelector(".link-tilte"),
        n = gsap.timeline({ paused: "true", reversed: "true" });
      n.to(t, { scale: 1, duration: 1.4, ease: "power2.inOut" }),
        e.addEventListener("mouseenter", () => {
          n.play(), r.classList.add("animate-in");
        }),
        e.addEventListener("mouseleave", () => {
          n.reverse(),
            r.classList.add("animate-out"),
            r.classList.remove("animate-in"),
            setTimeout(() => {
              r.classList.remove("animate-out");
            }, 300);
        });
    });
}),
  window.addEventListener("load", () => init());
