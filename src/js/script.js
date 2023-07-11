gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ duration: 2, ease: "none" });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".c",
    start: "top center",
    end: "top 100px",
    toggleActions: "restart reset restart none",
    pin: ".ghost_c",
    scrub: 3,
    markers: true,
  },
});

gsap.to(".a", {
  scrollTrigger: {
    trigger: ".a",
    toggleActions: "restart reset restart none",
  },
  duration: 3,
  rotate: 360,
  ease: "in",
  x: 700,
});

// gsap.to(b.current, {
//   scrollTrigger: {
//     trigger: a.current, // use other element to trigger this element
//     start: "top 50px", // "param1: position of element param2: position of scroll"
//     endTrigger: c.current,
//     end: () => "bottom 80%",
//     markers: true,
//     toggleActions: "restart reset restart none",
//   },
//   duration: 3,
//   rotate: 360,
//   x: 400,
// });

// gsap.to(b.current, {
//   scrollTrigger: {
//     trigger: a.current, // use other element to trigger this element
//     start: "top 50px", // "param1: position of element param2: position of scroll"
//     endTrigger: c.current,
//     end: () => "bottom 80%",
//     markers: true,
//     toggleActions: "restart reset restart none",
//   },
//   duration: 3,
//   rotate: 360,
//   x: 400,
// });

gsap.to(".b", {
  scrollTrigger: {
    trigger: ".b",
    toggleActions: "restart reset restart none",
    start: "top center",
    end: "top 100px",
    scrub: true, ///// stick with scroll bar
    // markers: true, //show bar in process development with line start green and line end with color red
  },
  duration: 3,
  rotate: 360,
  x: 700,
});
gsap.to(".ghost", {
  scrollTrigger: {
    trigger: ".ghost",
    toggleActions: "restart reset restart none",
    start: "top center",
    end: "top 100px",
    scrub: 0.5,
    markers: true,
  },
  duration: 1,
  rotate: 360,
  x: 700,
});
gsap.to(".ghost1", {
  scrollTrigger: {
    trigger: ".ghost1",
    toggleActions: "restart reset restart none",
    start: "top center",
    end: "top 100px",
    scrub: 0.8,
    markers: true,
  },
  duration: 3,
  rotate: 360,
  x: 700,
});
gsap.to(".ghost2", {
  scrollTrigger: {
    trigger: ".ghost2",
    toggleActions: "restart reset restart none",
    start: "top center",
    end: "top 100px",
    scrub: 1.2,
    markers: true,
  },
  duration: 3,
  rotate: 360,
  x: 700,
});

tl.to(".c", {
  duration: 3,
  rotate: 360,
  x: 700,
})
  .to(".c", {
    backgroundColor: "purple",
    duration: 1,
  })
  .to(".c", {
    x: 0,
    duration: 2,
  });

gsap.to(".d", {
  scrollTrigger: {
    trigger: ".d",
    toggleActions: "restart reset restart none",
  },
  duration: 3,
  rotate: 360,
  x: 700,
});

const tl1 = gsap.timeline();
tl1
  .from(".slide2", {
    xPercent: -100,
  })
  .from(".slide3", {
    xPercent: 100,
  })
  .from(".slide4", { yPercent: -100 });

ScrollTrigger.create({
  animation: tl1,
  trigger: ".slide",
  start: "top top",
  end: "+=4000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: true,
});
