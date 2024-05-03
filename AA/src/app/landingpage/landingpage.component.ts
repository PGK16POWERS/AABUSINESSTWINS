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

  showForm: boolean = true;
  spinner: boolean = false;
  error: boolean = false;
  confirm: boolean = false;

  onSubmit() :void {

    this.showForm = false;
    this.spinner = true;

    console.log("User Data: " + this.checkData.email);

    fetch('/newsletter-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: this.checkData.email })
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data if needed
      console.log('Email sent successfully:', data);

      this.confirm = true;

      setTimeout(() => {
        this.spinner = false;
        this.showForm = true;
      }, 3000);

      setTimeout(() => {
        this.confirm = false;
      }, 6000);

    })
    .catch(error => {
      console.error('Error sending email:', error);

      this.error = true;

      setTimeout(() => {
        this.spinner = false;
        
        this.showForm = true;
        
      }, 5000);

      setTimeout(() => {
        this.error = false;
      }, 6000);

    });
  
  }

  ngOnInit() {

      const menu = document.querySelector('.burger-menu') as HTMLElement;
      const header = document.querySelector("#header") as HTMLElement;
      const floatingNav = document.querySelector("#floating-menu") as HTMLElement;
      const headerBtn = document.querySelectorAll(".security-redirect") as NodeListOf<HTMLElement>;
      const faqChildDiv = document.querySelectorAll(".child-div") as NodeListOf<HTMLElement>;
      const splashBg = document.querySelector("#splash-bg") as HTMLElement;

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
      });

      setTimeout(() => {
        splashBg.classList.add("moveUpBg");
    }, 3000); // 3000 milliseconds = 3 seconds
      
  }

}
