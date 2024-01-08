const select = (e) => document.querySelector(e),
  selectAll = (e) => document.querySelectorAll(e);
let mmApproach = gsap.matchMedia();
mmApproach.add("(min-width: 800px)", () => {
  let e = selectAll(".approach-tab-item");
  e.forEach((t) => {
    t.itemWrap = t.querySelector(".approach-item-content");
    var e = t.querySelectorAll(".approach-item-up .is-h3"),
      l = t.querySelectorAll(".line-dotter"),
      r = t.querySelectorAll(".line-solid");
    t.itemWrap;
    let o = t.querySelector(".plusminus"),
      a = t.querySelector(".item-icon-text"),
      c = t.querySelector(".item-icon-text_close"),
      i = !1,
      s = gsap.timeline({ paused: "true", reversed: "true" });
    s.to(e, { x: 20, duration: 0.6, color: "#25CE5", ease: "power2.out" }),
      s.to(l, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      s.to(r, { xPercent: 100, duration: 0.6, ease: "power2.out" }, "<"),
      t.addEventListener("mouseenter", () => {
        i || s.play();
      }),
      t.addEventListener("mouseleave", () => {
        i || s.reverse();
      }),
      t.addEventListener("click", () => {
        s.reversed(!1).pause(),
          o.classList.toggle("active"),
          a.classList.toggle("active"),
          c.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px"),
          console.log(e),
          i ? (i = !1) : ((i = !0), s.progress(1));
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
      let l = t.querySelector(".plusminus"),
        r = t.querySelector(".item-icon-text"),
        o = t.querySelector(".item-icon-text_close");
      t.addEventListener("click", () => {
        l.classList.toggle("active"),
          r.classList.toggle("active"),
          o.classList.toggle("active");
        let e = t.itemWrap;
        e.style.maxHeight
          ? (e.style.maxHeight = null)
          : (e.style.maxHeight = e.scrollHeight + "px");
      });
    });
  });
