gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e),
  selectAll = (e) => document.querySelectorAll(e),
  mainNavLinks = gsap.utils.toArray(".menu_btn span"),
  NavLinksItem = gsap.utils.toArray(".nav-link_item"),
  insightLinksItem = gsap.utils.toArray(".insights-link"),
  bigLinksItem = gsap.utils.toArray(".link-big"),
  footerLinksItem = gsap.utils.toArray(".footer-link");
let lastScroll = 0;
const defaultOffset = 0,
  header = document.querySelector(".nav"),
  scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop,
  containHide = () => header.classList.contains("hide");
function navChanceColor() {
  gsap.utils.toArray("[section-dark]").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 10%",
      end: "bottom 10%",
      onEnter: function () {
        document.querySelector(".logo-wrapper").classList.add("dark-nav"),
          document.querySelector(".nav-btn-wrap").classList.add("dark-nav");
      },
      onEnterBack: function () {
        document.querySelector(".logo-wrapper").classList.add("dark-nav"),
          document.querySelector(".nav-btn-wrap").classList.add("dark-nav");
      },
    });
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
let menuToogle = select(".nav-btn-wrap"),
  logoWrap = select(".logo-wrapper"),
  navBar = select(".nav");
const menuOpen = gsap.timeline({ paused: "true", reversed: "true" });
function menuClick() {
  menuOpen.reversed() ? menuOpen.play() : menuOpen.reverse();
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
  menuToogle.addEventListener("click", menuClick);
let allLink = gsap.utils.toArray(".awards-link_wrap"),
  allImg = gsap.utils.toArray(".awards-media"),
  largeImage = document.querySelector("[awards-media]"),
  lInside = document.querySelector(".image .image_inside");
function initAwardsHover() {
  allLink.forEach((e, o) => {
    e.addEventListener("mouseenter", function (e) {
      if ("mouseenter" === e.type) {
        const t = gsap.timeline();
        t.to(largeImage, { autoAlpha: 1 }),
          t.to(allImg[o], { autoAlpha: 1 }, "<");
      } else if ("mouseleave" === e.type) {
        const r = gsap.timeline();
        r.to(largeImage, { autoAlpha: 0 }),
          r.to(allImg[o], { autoAlpha: 0 }, "<");
      }
    }),
      e.addEventListener("mouseleave", function (e) {
        if ("mouseenter" === e.type) {
          const t = gsap.timeline();
          t.to(largeImage, { autoAlpha: 1 }),
            t.to(allImg[o], { autoAlpha: 1 }, "<");
        } else if ("mouseleave" === e.type) {
          const r = gsap.timeline();
          r.to(largeImage, { autoAlpha: 0 }),
            r.to(allImg[o], { autoAlpha: 0 }, "<");
        }
      });
  });
}
let mm = gsap.matchMedia();
function initImageParallax() {
  gsap.utils.toArray(".with-parallax").forEach((e) => {
    var t = gsap.utils.toArray(".image-parallax");
    const r = gsap.timeline({
      scrollTrigger: {
        trigger: e,
        start: "top bottom-=10%",
        end: "center top",
        scrub: 1,
      },
    });
    r.from(t[0], { yPercent: 10 }, "<"),
      r.from(t[1], { yPercent: 8 }, "<"),
      r.from(t[2], { yPercent: 10 }, "<");
  });
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
      trigger: ".we-do_email-wrapper",
      start: "top bottom",
      end: "bottom top-=200%",
      scrub: 1,
    },
  });
  e.to(".we-do-email-item_wrap", { xPercent: -25 });
}
function moveRect() {
  let e = gsap.timeline({
    scrollTrigger: {
      id: "rect",
      trigger: ".article-section",
      start: "top bottom-=22%",
      end: "bottom top",
      scrub: !0,
      invalidateOnRefresh: !0,
    },
  });
  e.to(".arcticle-rect.two", { yPercent: 10 }),
    e.to(".arcticle-rect.three", { yPercent: 20 }, "<"),
    e.to(".arcticle-rect.four", { yPercent: 30 }, "<"),
    e.to(".arcticle-rect.five", { yPercent: 40 }, "<"),
    e.to(".arcticle-rect.six", { yPercent: 50 }, "<");
}
function navColorBg() {
  ScrollTrigger.create({
    trigger: "[hero]",
    start: "bottom-=10% top",
    onEnter: function () {
      document.querySelector(".nav").classList.add("white-bg");
    },
    onEnterBack: function () {
      document.querySelector(".nav").classList.remove("white-bg");
    },
  });
}
function init() {
  navColorBg(),
    initAwardsHover(),
    moveLogoPattern(),
    moveLogoEmeil(),
    navChanceColor();
}
function resizeInit() {
  init();
}
mm.add("(min-width: 992px)", () => {
  initImageParallax(), moveRect();
}),
  window.addEventListener("load", () => {
    init();
  }),
  window.addEventListener("resize", () => {
    resizeInit();
  });
