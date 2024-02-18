const separate = id => {
    const element = document.getElementById(id),
          text = element.innerText.split("");
    
    element.innerText = "";
    
    text.forEach(letter => {
      const span = document.createElement("span");

      span.className = "letter";

      span.innerText = letter;

      element.appendChild(span);
    });
  }

  separate("About-Us");
  separate("Events");
  separate("Projects");
  separate("Sponsors");
  separate("Contact-Us");


// gsap.from("#large-logo", {opacity: 0, duration: 1, x: -200});
// gsap.from(".option", {opacity: 0, duration: 1, y: -50, stagger: 0.2});