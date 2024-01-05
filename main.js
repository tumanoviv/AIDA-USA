gsap.registerPlugin(ScrollTrigger);
const select = (e) => document.querySelector(e),
  selectAll = (e) => document.querySelectorAll(e),
  progresLine = select(".loader-green-line"),
  logoLottie = select(".lottie-wrapper"),
  loaderWrap = select(".loader");
let callItem = gsap.utils.toArray(".call-item"),
  infoCallItem = gsap.utils.toArray(".call-info-item");
infoCallItem[0].classList.add("is-active"),
  callItem[0].classList.add("is-active"),
  callItem.forEach((t, o) => {
    t.addEventListener("mouseenter", (e) => {
      infoCallItem.forEach((e) => {
        e.classList.remove("is-active");
      }),
        callItem.forEach((e) => {
          e.classList.remove("is-active");
        }),
        t.classList.add("is-active"),
        infoCallItem[o].classList.add("is-active");
    });
  });
const addActiveClass = (e) => {
    e.classList.add("is-active");
  },
  cookiesBtn = document.querySelector(".cookies-btn"),
  cookiesClose = document.querySelector(".cookies-close"),
  cookies = document.querySelector(".cookies");
cookiesBtn.addEventListener("click", () => {
  addActiveClass(cookies);
}),
  cookiesClose.addEventListener("click", () => {
    addActiveClass(cookies);
  });
const mainNavLinks = gsap.utils.toArray(".menu_btn span"),
  NavLinksItem = gsap.utils.toArray(".nav-link_item"),
  insightLinksItem = gsap.utils.toArray(".insights-link"),
  bigLinksItem = gsap.utils.toArray(".link-big"),
  footerLinksItem = gsap.utils.toArray(".footer-link");
mainNavLinks.forEach((t) => {
  t.addEventListener("mouseleave", (e) => {
    t.classList.add("animate-out"),
      setTimeout(() => {
        t.classList.remove("animate-out");
      }, 300);
  });
});
let lastScroll = 0;
const defaultOffset = 0,
  header = document.querySelector(".nav"),
  scrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop,
  containHide = () => header.classList.contains("hide");
window.addEventListener("scroll", () => {
  scrollPosition() > lastScroll &&
  !containHide() &&
  scrollPosition() > defaultOffset
    ? header.classList.add("hide")
    : scrollPosition() < lastScroll &&
      containHide() &&
      header.classList.remove("hide"),
    (lastScroll = scrollPosition());
}),
  insightLinksItem.forEach((t) => {
    t.addEventListener("mouseleave", (e) => {
      t.classList.add("animate-out"),
        setTimeout(() => {
          t.classList.remove("animate-out");
        }, 300);
    });
  }),
  bigLinksItem.forEach((t) => {
    t.addEventListener("mouseleave", (e) => {
      t.classList.add("animate-out"),
        setTimeout(() => {
          t.classList.remove("animate-out");
        }, 300);
    });
  }),
  footerLinksItem.forEach((t) => {
    t.addEventListener("mouseleave", (e) => {
      t.classList.add("animate-out"),
        setTimeout(() => {
          t.classList.remove("animate-out");
        }, 300);
    });
  });
let menuToogle = select(".nav-btn-wrap"),
  logoWrap = select(".logo-wrapper"),
  navBar = select(".nav");
const menuOpen = gsap.timeline({ paused: "true", reversed: "true" });
function menuClick() {
  menuOpen.reversed() ? menuOpen.play() : menuOpen.reverse();
}
function initLoader() {
  var r = selectAll("[loading-text]"),
    a = selectAll("[hero-up]"),
    e = localStorage.getItem("visit");
  if ((console.log(e), "1" === e)) {
    gsap.set(".loader-green-line", { autoAlpha: 0 });
    let e = gsap.timeline({
      default: { duration: 0.8, ease: "power.out" },
      onStart: () => lenis.stop(),
      onComplete: function () {
        select("body").classList.remove("is-loading"),
          pin(),
          navColorBg(),
          moveReting(),
          moveLogoPattern(),
          cursor();
      },
    });
    e.to(
      ".loader-center-content",
      { autoAlpha: 1, duration: 2, ease: "none" },
      "<"
    );
    let t = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.6 },
      onComplete: () => lenis.start(),
    });
    t.to(r, { yPercent: -100, transformOrigin: "bottom", stagger: 0.2 }),
      t.to([progresLine, logoLottie], { autoAlpha: 0, duration: 0.8 }, 0),
      t.to(loaderWrap, { yPercent: -100 }),
      t.from(a, { y: 80, stagger: 0.1 }, "<-=10%");
    let o = gsap.timeline();
    o.add(e), o.add(t);
  } else {
    localStorage.setItem("visit", "1");
    let e = gsap.timeline({
      default: { duration: 1.1, ease: "power2.out" },
      onStart: () => lenis.stop(),
      onComplete: function () {
        select("body").classList.remove("is-loading"),
          pin(),
          navColorBg(),
          moveReting(),
          moveLogoPattern(),
          cursor();
      },
    });
    e.to(
      [
        ".loader-up-text-wrap",
        ".loader-center-content",
        ".loader-down-content",
      ],
      { autoAlpha: 1, duration: 1, ease: "none" },
      "<"
    ),
      e.from(progresLine, { scaleX: 0, transformOrigin: "left", duration: 5 });
    let t = gsap.timeline({
      defaults: { ease: "power2.inOut", duration: 0.8 },
      onComplete: () => lenis.start(),
    });
    t.to(r, { yPercent: -100, transformOrigin: "bottom", stagger: 0.2 }),
      t.to([progresLine, logoLottie], { autoAlpha: 0, duration: 0.8 }, 0),
      t.to(loaderWrap, { yPercent: -100 }),
      t.from(a, { y: 80, stagger: 0.1 }, "<-=10%");
    let o = gsap.timeline();
    o.add(e), o.add(t);
  }
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
let mmAbautTab = gsap.matchMedia();
mmAbautTab.add("(min-width: 800px)", () => {
  let e = selectAll(".abaut_item-subtitle");
  e.forEach((t) => {
    t.itemWrap = t.querySelector(".abaut_tab-sub");
    var e = t.querySelectorAll(".tab-link a"),
      o = t.querySelectorAll(".line-dotter"),
      r = t.querySelectorAll(".line-solid");
    let a = t.querySelector(".plusminus"),
      s = !1,
      i = gsap.timeline({ paused: "true", reversed: "true" });
    i.to(e, { x: 20, duration: 0.6, color: "#25CE5", ease: "power2.out" }),
      i.to(o, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      i.to(r, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      t.addEventListener("mouseenter", () => {
        s || i.play();
      }),
      t.addEventListener("mouseleave", () => {
        s || i.reverse();
      }),
      t.addEventListener("click", () => {
        i.reversed(!1).pause(), a.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px"),
          console.log(e),
          s ? (s = !1) : ((s = !0), i.progress(1));
      });
  });
}),
  mmAbautTab.add("(max-width: 800px)", () => {
    let e = selectAll(".abaut_item-subtitle");
    e.forEach((t) => {
      t.itemWrap = t.querySelector(".abaut_tab-sub");
      t.querySelectorAll(".tab-link a"),
        t.querySelectorAll(".line-dotter"),
        t.querySelectorAll(".line-solid");
      let o = t.querySelector(".plusminus");
      t.addEventListener("click", () => {
        o.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    });
  });
let mmApproach = gsap.matchMedia();
mmApproach.add("(min-width: 800px)", () => {
  let e = selectAll(".approach-tab-item");
  e.forEach((t) => {
    t.itemWrap = t.querySelector(".approach-item-content");
    var e = t.querySelectorAll(".approach-item-up .is-h3"),
      o = t.querySelectorAll(".line-dotter"),
      r = t.querySelectorAll(".line-solid");
    t.itemWrap;
    let a = t.querySelector(".plusminus"),
      s = t.querySelector(".item-icon-text"),
      i = t.querySelector(".item-icon-text_close"),
      l = !1,
      n = gsap.timeline({ paused: "true", reversed: "true" });
    n.to(e, { x: 20, duration: 0.6, color: "#25CE5", ease: "power2.out" }),
      n.to(o, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      n.to(r, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      t.addEventListener("mouseenter", () => {
        l || n.play();
      }),
      t.addEventListener("mouseleave", () => {
        l || n.reverse();
      }),
      t.addEventListener("click", () => {
        n.reversed(!1).pause(),
          a.classList.toggle("active"),
          s.classList.toggle("active"),
          i.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px"),
          console.log(e),
          l ? (l = !1) : ((l = !0), n.progress(1));
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
      let o = t.querySelector(".plusminus"),
        r = t.querySelector(".item-icon-text"),
        a = t.querySelector(".item-icon-text_close");
      t.addEventListener("click", () => {
        o.classList.toggle("active"),
          r.classList.toggle("active"),
          a.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    });
  });
let cardItem = selectAll(".works_grid-item"),
  img = selectAll(".image img");
gsap.set(img, { scale: 1.1, transformOrigin: "center center" }),
  cardItem.forEach((e) => {
    var t = e.querySelector(".image img");
    let o = e.querySelector(".link-tilte"),
      r = gsap.timeline({ paused: "true", reversed: "true" });
    r.to(t, { scale: 1, duration: 1.4, ease: "power2.inOut" }),
      e.addEventListener("mouseenter", () => {
        r.play(), o.classList.add("animate-in");
      }),
      e.addEventListener("mouseleave", () => {
        r.reverse(),
          o.classList.add("animate-out"),
          o.classList.remove("animate-in"),
          setTimeout(() => {
            o.classList.remove("animate-out");
          }, 300);
      });
  });
let insightItem = selectAll(".isughts-item"),
  imgInsight = selectAll(".image-content-block img");
function pin() {
  ScrollTrigger.create({
    trigger: ".abaut-right-wrapper",
    start: "top 20%",
    endTrigger: ".abaut_left-blok",
    end: "bottom-=30% center",
    pin: !0,
    pinSpacing: !1,
  });
}
function pinWork() {
  let e = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "bottom bottom",
      scrub: !0,
    },
  });
  e.to([".rating-section", ".approach-section", ".clients-section"], {
    yPercent: -100,
  });
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
  $(".slider-main-component").mouseenter(function () {
    $("#cursor").addClass("drag-cursor");
  }),
    $(".slider-main-component").mouseleave(function () {
      $("#cursor").removeClass("drag-cursor");
    });
}
function init() {
  initLoader();
}
gsap.set(imgInsight, { scale: 1.02, transformOrigin: "center center" }),
  insightItem.forEach((e) => {
    var t = e.querySelector(".image img");
    let o = e.querySelector(".is-h3"),
      r = e.querySelector(".insights-link"),
      a = gsap.timeline({ paused: "true", reversed: "true" });
    a.to(t, { scale: 1, duration: 0.8, ease: "power.inOut" }),
      e.addEventListener("mouseenter", () => {
        a.play(),
          o.classList.add("title-underline"),
          r.classList.add("link-underline");
      }),
      e.addEventListener("mouseleave", () => {
        a.reverse(),
          r.classList.remove("link-underline"),
          o.classList.remove("title-underline");
      });
  }),
  $(".slider-main-component").each(function (e) {
    let t = !1;
    "true" === $(this).attr("loop-mode") && (t = !0);
    let o = 300;
    void 0 !== $(this).attr("slider-duration") &&
      (o = +$(this).attr("slider-duration"));
    new Swiper($(this).find(".swiper")[0], {
      speed: o,
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
  }),
  document.addEventListener("DOMContentLoaded", init);
