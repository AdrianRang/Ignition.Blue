// @ts-check
/**
 * @typedef {import("gsap")} gsap
 */

let menuOpen = true;

const separate = id => {
  const element = document.getElementById(id),
  // @ts-ignore
        text = element.innerText.split("");

  // @ts-ignore
  element.innerText = "";

  text.forEach(letter => {
    if (letter == " "){
      const div = document.createElement("div");
      div.className = "space";
      element?.appendChild(div);
    }

    const span = document.createElement("span");

    span.className = "letter";

    span.innerText = letter;

    // @ts-ignore
    element.appendChild(span);
  });
}

separate("About-Us");
separate("Events");
separate("Projects");
separate("Sponsors");
separate("Contact-Us");


//* Handling About Us
// @ts-ignore
document.querySelector("#About-Us").addEventListener("mouseover", () =>{
  gsap.to("#About-Us > .letter", {y: "random(-25, 25)", rotation: "random(-10, 10)", stagger: 0.05, ease: "circ"});
  gsap.to(".option:not(#About-Us)", {opacity: 0.2, duration: "50ms"});
});

// @ts-ignore
document.querySelector("#About-Us").addEventListener("mouseleave", () =>{
  gsap.to("#About-Us > .letter", {y: "0%", rotation: 0, stagger: 0.05, ease: "elastic"})
  gsap.to(".option", {opacity: 1, duration: "100ms"})
});

// @ts-ignore
document.querySelector("#About-Us").addEventListener("mousedown", () =>{
  handleClick("#About-Us");
});


//* Handling Events
// @ts-ignore
document.querySelector("#Events").addEventListener("mouseover", () =>{
  gsap.to("#Events > .letter", {y: "random(-25, 25)", rotation: "random(-10, 10)", stagger: 0.05, ease: "circ"})
  gsap.to(".option:not(#Events)", {opacity: 0.2, duration: "50ms"});
});

// @ts-ignore
document.querySelector("#Events").addEventListener("mouseleave", () =>{
  gsap.to("#Events > .letter", {y: "0%", stagger: 0.05, ease: "elastic"})
  gsap.to(".option", {opacity: 1, duration: "100ms"})
});

// @ts-ignore
document.querySelector("#Events").addEventListener("mousedown", () =>{
  handleClick("#Events");
});

//* Handling Projects
// @ts-ignore
document.querySelector("#Projects").addEventListener("mouseover", () =>{
  gsap.to("#Projects > .letter", {y: "random(-25, 25)", rotation: "random(-10, 10)", stagger: 0.05, ease: "circ"})
  gsap.to(".option:not(#Projects)", {opacity: 0.2, duration: "50ms"});
});

// @ts-ignore
document.querySelector("#Projects").addEventListener("mouseleave", () =>{
  gsap.to("#Projects > .letter", {y: "0%", stagger: 0.05, ease: "elastic"})
  gsap.to(".option", {opacity: 1, duration: "100ms"})
});

// @ts-ignore
document.querySelector("#Projects").addEventListener("mousedown", () =>{
  handleClick("#Projects");
});

//* Handling Sponsors
// @ts-ignore
document.querySelector("#Sponsors").addEventListener("mouseover", () =>{
  gsap.to("#Sponsors > .letter", {y: "random(-25, 25)", rotation: "random(-10, 10)", stagger: 0.05, ease: "circ"})
  gsap.to(".option:not(#Sponsors)", {opacity: 0.2, duration: "50ms"});
});

// @ts-ignore
document.querySelector("#Sponsors").addEventListener("mouseleave", () =>{
  gsap.to("#Sponsors > .letter", {y: "0%", stagger: 0.05, ease: "elastic"})
  gsap.to(".option", {opacity: 1, duration: "100ms"})
});

// @ts-ignore
document.querySelector("#Sponsors").addEventListener("mousedown", () =>{
  handleClick("#Sponsors");
});

//* Handling Contact Us
// @ts-ignore
document.querySelector("#Contact-Us").addEventListener("mouseover", () =>{
  gsap.to("#Contact-Us > .letter", {y: "random(-25, 25)", rotation: "random(-10, 10)", stagger: 0.05, ease: "circ"})
  gsap.to(".option:not(#Contact-Us)", {opacity: 0.2, duration: "50ms"});
});

// @ts-ignore
document.querySelector("#Contact-Us").addEventListener("mouseleave", () =>{
  gsap.to("#Contact-Us > .letter", {y: "0%", stagger: 0.05, ease: "elastic"})
  gsap.to(".option", {opacity: 1, duration: "100ms"})
});

// @ts-ignore
document.querySelector("#Contact-Us").addEventListener("mousedown", () =>{
  handleClick("#Contact-Us");
});

// @ts-ignore
const handleClick = async selector => {
  gsap.to(".letter", {y: "0%", stagger: 0.05, ease: "elastic"})
  gsap.to(".menu-container", {x: "250vw", scale: 1.25, duration: 1.5, ease: "power3.inOut"});
  await gsap.to(".option", {x: "100vw", duration: 0.5, stagger: 0.1, ease: "power3.inOut"});

  //@ts-ignore
  window.open("./" + document.querySelector(selector).dataset.link,"_self");
  gsap.fromTo(".menu-container", {x: "-200vw"}, {x: "0", scale: 1, duration: 1.5, ease: "power3.inOut"});
  gsap.fromTo(".option", {x: 0, scale: 1.5}, {x: "0", scale: 1, delay: 0.25, duration: 0.5, stagger: 0.1, ease: "power3.out"});
  menuOpen = true;
}

if(!(navigator.userAgent.indexOf("Firefox") != -1)){
  // @ts-ignore
  document.body.style.zoom = document.querySelector("body").offsetHeight * 70/2057 * 1.5 + "%"
}else{
  alert("looks like you're using firefox, I haven't figured out how to configure zoom yet. yo probably need to zoom out")
}