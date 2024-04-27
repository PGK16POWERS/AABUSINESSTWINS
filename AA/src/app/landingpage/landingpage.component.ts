import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {

  checkData = {
    email: ''
  };

  onSubmit() :void {
    console.log("User Data: " + this.checkData);
  }

  ngOnInit() {

      const menu = document.querySelector('.burger-menu') as HTMLElement;
      const header = document.querySelector("#header") as HTMLElement;
      const floatingNav = document.querySelector("#floating-menu") as HTMLElement;
      const headerBtn = document.querySelectorAll(".security-redirect") as NodeListOf<HTMLElement>;
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

      faqChildDiv.forEach(child => {

        child.addEventListener("click", () => {

          const answers = child.querySelectorAll(".faq-ans") as NodeListOf<HTMLElement>;

          answers.forEach(answer => {
            answer.classList.toggle("flexed");
          });

        });

      });

      headerBtn.forEach(btn => {
        btn.addEventListener("click", () => {
          window.location.href ="/security";
        })
      })
      
  }

}
