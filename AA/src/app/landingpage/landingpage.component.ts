import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {

  ngOnInit() {

      const menu = document.querySelector('.burger-menu') as HTMLElement;
      const header = document.querySelector("#header") as HTMLElement;
      const floatingNav = document.querySelector("#floating-menu") as HTMLElement;
      const faqChildDiv = document.querySelectorAll(".child-div") as NodeListOf<HTMLElement>;

      var headerHeight = header.offsetHeight;
      floatingNav.style.top = headerHeight + "px";

      var menuFlag = false;

      menu.addEventListener("click", () => {
        menu.classList.toggle('open'); 
        if (!menuFlag) {
          floatingNav.style.display = "flex";
          menuFlag = true;
        } else {
          floatingNav.style.display = "none";
          menuFlag = false;
        }
      });

      const answers = document.querySelectorAll(".faq-ans") as NodeListOf<HTMLElement>;

      faqChildDiv.forEach(child => {

        child.addEventListener("click", () => {

          answers.forEach(answer => {
            answer.style.display = "flex";

            if (answer.style.display === "flex") {
              child.addEventListener("click", ()=> {
                answer.style.display = "none";
              })
            }
          });

        });

      });
      
  }

}
