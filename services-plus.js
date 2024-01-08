gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e),
  selectAll = (e) => document.querySelectorAll(e);
var readMoreLinks = document.querySelectorAll(".read-more-link");
readMoreLinks.forEach(function (t) {
  t.addEventListener("click", function (e) {
    e.preventDefault(),
      (t
        .closest(".services-tab-content")
        .querySelector(".tab-modal-wrapper").style.display = "block");
  });
});
var closeButtons = document.querySelectorAll(".btn.btn--green.z-index-1");
closeButtons.forEach(function (t) {
  t.addEventListener("click", function (e) {
    t
      .closest(".services-tab-content")
      .querySelector(".tab-modal-wrapper").style.display = "none";
  });
});
let mmApproach = gsap.matchMedia();
mmApproach.add("(min-width: 800px)", () => {
  let e = selectAll(".approach-tab-item");
  e.forEach((t) => {
    t.itemWrap = t.querySelector(".approach-item-content");
    var e = t.querySelectorAll(".approach-item-up .is-h3"),
      r = t.querySelectorAll(".line-dotter"),
      o = t.querySelectorAll(".line-solid");
    t.itemWrap;
    let s = t.querySelector(".plusminus"),
      a = t.querySelector(".item-icon-text"),
      n = t.querySelector(".item-icon-text_close"),
      i = !1,
      l = gsap.timeline({ paused: "true", reversed: "true" });
    l.to(e, { x: 20, duration: 0.6, color: "#25CE5", ease: "power2.out" }),
      l.to(r, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      l.to(o, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      t.addEventListener("mouseenter", () => {
        i || l.play();
      }),
      t.addEventListener("mouseleave", () => {
        i || l.reverse();
      }),
      t.addEventListener("click", () => {
        l.reversed(!1).pause(),
          s.classList.toggle("active"),
          a.classList.toggle("active"),
          n.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px"),
          console.log(e),
          i ? (i = !1) : ((i = !0), l.progress(1));
      });
  });
}),
  mmApproach.add("(max-width: 799px)", () => {
    let e = selectAll(".approach-tab-item");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".approach-item-content");
      t.querySelectorAll(".approach-item-up .is-h3"),
        t.querySelectorAll(".line-dotter"),
        t.querySelectorAll(".line-solid"),
        t.itemWrap;
      let r = t.querySelector(".plusminus"),
        o = t.querySelector(".item-icon-text"),
        s = t.querySelector(".item-icon-text_close");
      t.addEventListener("click", () => {
        r.classList.toggle("active"),
          o.classList.toggle("active"),
          s.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    });
  });
let callItem = gsap.utils.toArray(".call-item"),
  infoCallItem = gsap.utils.toArray(".call-info-item");
function moveLogoPattern() {
  let e = gsap.timeline({
    scrollTrigger: {
      id: "Pattern",
      trigger: ".call-section-sticky",
      start: "top bottom",
      end: "bottom+=50% top",
      scrub: 2,
    },
  });
  e.to(".call-bg-logo-wrap", { xPercent: 28, transformOrigin: "right center" });
}
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
function cursorClients() {
  $(".slider-main-component").mouseenter(function () {
    $("#cursor").addClass("drag-cursor");
  }),
    $(".slider-main-component").mouseleave(function () {
      $("#cursor").removeClass("drag-cursor");
    });
}
infoCallItem[0].classList.add("is-active"),
  callItem[0].classList.add("is-active"),
  callItem.forEach((t, r) => {
    t.addEventListener("mouseenter", (e) => {
      infoCallItem.forEach((e) => {
        e.classList.remove("is-active");
      }),
        callItem.forEach((e) => {
          e.classList.remove("is-active");
        }),
        t.classList.add("is-active"),
        infoCallItem[r].classList.add("is-active");
    });
  }),
  $(".slider-main-component").each(function (e) {
    let t = !1;
    "true" === $(this).attr("loop-mode") && (t = !0);
    let r = 300;
    void 0 !== $(this).attr("slider-duration") &&
      (r = +$(this).attr("slider-duration"));
    new Swiper($(this).find(".swiper")[0], {
      speed: r,
      loop: t,
      autoHeight: !1,
      centeredSlides: t,
      followFinger: !0,
      freeMode: !1,
      slideToClickedSlide: !1,
      slidesPerView: 1,
      spaceBetween: "4%",
      rewind: !1,
      mousewheel: { forceToAxis: !0 },
      keyboard: { enabled: !0, onlyInViewport: !0 },
      breakpoints: {
        480: { slidesPerView: 1, spaceBetween: "4%" },
        768: { slidesPerView: 2, spaceBetween: "4%" },
        992: { slidesPerView: 4, spaceBetween: "2%" },
      },
      scrollbar: {
        el: ".swiper-drag-wrapper",
        draggable: !0,
        dragClass: "swiper-drag",
        snapOnRelease: !0,
      },
    });
  }),
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
let btnTouch = document.querySelector("[touch=btn]"),
  closeTouch = document.querySelector("[touch=close]");
btnTouch.addEventListener("click", function () {
  let e = document.querySelector(".touch-form-section");
  e.classList.add("is-active");
}),
  closeTouch.addEventListener("click", function () {
    let e = document.querySelector(".touch-form-section");
    e.classList.remove("is-active");
  });
const mainNavLinks = gsap.utils.toArray(".menu_btn span"),
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
function moveReting() {
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".approach-oberlay-wrap",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
  e.to(".rating-logo-wrap", { x: 300 });
}
function init() {
  navColorBg(),
    moveReting(),
    moveLogoPattern(),
    cursorClients(),
    moveLogoEmeil();
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
let mm = gsap.matchMedia();
mm.add("(min-width: 992px)", () => {
  cursor();
  let e = selectAll(".splide__slide");
  var t = selectAll(".image img");
  gsap.set(t, { scale: 1.1, transformOrigin: "center center" }),
    e.forEach((e) => {
      var t = e.querySelector(".image img");
      let r = e.querySelector(".link-tilte"),
        o = gsap.timeline({ paused: "true", reversed: "true" });
      o.to(t, { scale: 1, duration: 1.4, ease: "power2.inOut" }),
        e.addEventListener("mouseenter", () => {
          o.play(), r.classList.add("animate-in");
        }),
        e.addEventListener("mouseleave", () => {
          o.reverse(),
            r.classList.add("animate-out"),
            r.classList.remove("animate-in"),
            setTimeout(() => {
              r.classList.remove("animate-out");
            }, 300);
        });
    });
}),
  window.addEventListener("load", () => init());
