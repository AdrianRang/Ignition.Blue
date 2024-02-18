// @ts-check
/**
 * @typedef {import("gsap")} gsap
 */

let menuOpen = true;

// @ts-ignore
document.querySelector(".menu").addEventListener("click", () => {
  if (menuOpen) {
    gsap.to(".menu-container", {x: "150vw", scale: 1.25, duration: 1.5, ease: "power3.inOut"});
    gsap.to(".option", {x: "100vw", duration: 0.5, stagger: 0.1, ease: "power3.inOut"});
    menuOpen = false;
  } else {
    gsap.fromTo(".menu-container", {x: "-200vw"}, {x: "0", scale: 1, duration: 1.5, ease: "power3.inOut"});
    gsap.fromTo(".option", {x: 0, scale: 1.5}, {x: "0", scale: 1, delay: 0.25, duration: 0.5, stagger: 0.1, ease: "power3.out"});
    menuOpen = true;
  }
});