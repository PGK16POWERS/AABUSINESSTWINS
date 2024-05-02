import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent implements OnInit {

  ngOnInit(): void {
      const regBtn = document.querySelector("#mail-opt") as HTMLElement;
      const facebookBtn = document.querySelector("#facebook-opt") as HTMLElement;
      const googleBtn = document.querySelector("#google-opt") as HTMLElement;

      regBtn.addEventListener("click", () => {
        window.location.href = "security/register"
      });

      facebookBtn.addEventListener("click", () => {
        window.location.href = "/auth/facebook"
      });

      googleBtn.addEventListener("click", () => {
        window.location.href = "/auth/google"
      });

  }

}
