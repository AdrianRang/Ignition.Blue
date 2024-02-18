const enhance = id => {
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

  enhance("About-Us");
  enhance("Events");
  enhance("Projects");
  enhance("Sponsors");
  enhance("Contact-Us");


// gsap.from("#large-logo", {opacity: 0, duration: 1, x: -200});
// gsap.from(".option", {opacity: 0, duration: 1, y: -50, stagger: 0.2});