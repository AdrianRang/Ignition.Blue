gsap.from("h1", {x: -100, y: -10});
gsap.from(".topbar", {y: -200})

document.querySelector("#home").addEventListener("mousedown", async () =>{
    gsap.to("h1", {x: 150, y: -10});
    await gsap.to(".topbar", {y: -200});

    window.open("/index.html","_self");
})