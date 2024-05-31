import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'a';

  ngOnInit() {
    const serviceChildren = document.querySelectorAll(".service-child") as NodeListOf<HTMLElement>;
    const heroHeader = document.querySelector(".hero-header-small") as HTMLElement;
    let sentenceIndex = 0;
    let charIndex = 0;

    serviceChildren.forEach(child => {

      const viewDetailLink = child.querySelector(".service-link") as HTMLElement;
      const detailParent = child.querySelector(".details-div") as HTMLElement;
      const hideLink = child.querySelector(".hide-link") as HTMLElement;

      viewDetailLink.addEventListener("click", () => {
        const serviceChildren = document.querySelectorAll(".service-child") as NodeListOf<HTMLElement>;

        serviceChildren.forEach(kid => {
          kid.style.display = "none";
          child.style.display = "flex";
        });

        child.style.width = "100%";
        child.style.height = "100%";

        detailParent.style.display = "flex";

        viewDetailLink.style.display = "none"
      });

      hideLink.addEventListener("click", () => {
        const serviceChildren = document.querySelectorAll(".service-child") as NodeListOf<HTMLElement>;

        serviceChildren.forEach(kid => {
          kid.style.display = "flex";
        });

        child.style.width = "";
        child.style.height = "";

        detailParent.style.display = "none";

        viewDetailLink.style.display = "flex"
      });

    });

    const sentences = [
      "Welcome to our website!",
      "Experience the best services with us.",
      "Contact us for more information.",
      "Stay tuned for updates."
  ];

    function typeWriter() {
      if (charIndex < sentences[sentenceIndex].length) {
          heroHeader.innerHTML += sentences[sentenceIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 100);
      } else {
          setTimeout(() => {
              charIndex = 0;
              sentenceIndex = (sentenceIndex + 1) % sentences.length;
              heroHeader.innerHTML = "";
              typeWriter();
          }, 2000);
      }
  }

  // Clear the initial text and start the typewriter effect
  heroHeader.innerHTML = "";
  typeWriter();

  }
}
