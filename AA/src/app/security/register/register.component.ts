import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  checkData = {
    name: '',
    email: '',
    password: '',
    conPassword: '',
  }

  onSubmit() :void {
    console.log("User Data: " + this.checkData);
  }

  checkPasswordCriteria(password: string) :boolean {

    const regex = /^(?=.*[A-Z]) (?=.*\d).{8,}$/
    return regex.test(password);
  }

  ngOnInit(): void {

    const passwordInp = document.querySelector("#passwordInp") as HTMLElement;
    const conPasswordInp = document.querySelector("#conPasswordInp") as HTMLElement;
    const hiddenPasswordIcon = document.querySelector("#passwordHidden") as HTMLElement;
    const shownPasswordIcon = document.querySelector("#passwordShown") as HTMLElement;
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

    conPasswordInp.addEventListener("click", () => {
      passwordInp.setAttribute("type","password");
      hiddenPasswordIcon.style.display ="flex";
      shownPasswordIcon.style.display = "none";
    });

  }

}
