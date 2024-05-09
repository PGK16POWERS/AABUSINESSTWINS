import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  checkData = {
    email: '',
    password: '',
  }

  onSubmit() :void {
    console.log("User Data: " + this.checkData);
  }

  ngOnInit(): void {

    const passwordInp = document.querySelector("#passwordInp") as HTMLElement;
    const emailInp = document.querySelector("#emailInp") as HTMLElement;
    const hiddenPasswordIcon = document.querySelector("#passwordHidden") as HTMLElement;
    const shownPasswordIcon = document.querySelector("#passwordShown") as HTMLElement;
    const subBtn = document.querySelector(".sub-btn") as HTMLElement;
    const googleSS = document.querySelector("#google-ss") as HTMLElement;

    googleSS.addEventListener("click", () => {
      window.location.href = "/auth/google"
    });

    hiddenPasswordIcon.addEventListener("click", () => {
      passwordInp.setAttribute("type","text");
      hiddenPasswordIcon.style.display ="none";
      shownPasswordIcon.style.display = "flex";
    });

    shownPasswordIcon.addEventListener("click", () => {
      passwordInp.setAttribute("type","password");
      hiddenPasswordIcon.style.display ="flex";
      shownPasswordIcon.style.display = "none";
    });

    emailInp.addEventListener("click", () => {
      passwordInp.setAttribute("type","password");
      hiddenPasswordIcon.style.display ="flex";
      shownPasswordIcon.style.display = "none";
    });

    subBtn.addEventListener("click", () => {
      window.location.href = "/user-dashboard/home"
    })

  }

}
