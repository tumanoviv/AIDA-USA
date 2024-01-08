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
  logoWrap = select(".logo-wrapper");
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
        logoWrap.classList.contains("dark-nav-open") ||
          logoWrap.classList.add("dark-nav-open");
      },
      onReverseComplete: () => {
        logoWrap.classList.contains("dark-nav-open") &&
          logoWrap.classList.remove("dark-nav-open");
      },
    },
    "0"
  ),
  menuToogle.addEventListener("click", menuClick);
let insightItem = selectAll(".isughts-collection"),
  imgInsight = selectAll(".next-image-block img");
insightItem.forEach((e) => {
  var t = e.querySelector(".image img");
  let n = e.querySelector(".is-h3"),
    r = e.querySelector(".insights-link"),
    o = gsap.timeline({ paused: "true", reversed: "true" });
  o.to(t, {
    scale: 1,
    duration: 0.8,
    ease: "power.inOut",
    transformOrigin: "center center",
  }),
    e.addEventListener("mouseenter", () => {
      o.play(),
        n.classList.add("title-underline"),
        r.classList.add("link-underline");
    }),
    e.addEventListener("mouseleave", () => {
      o.reverse(),
        r.classList.remove("link-underline"),
        n.classList.remove("title-underline");
    });
});
