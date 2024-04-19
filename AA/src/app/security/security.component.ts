import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent implements OnInit {

  ngOnInit(): void {
      const regBtn = document.querySelector("#register-btn") as HTMLElement;
      const logBtn = document.querySelector("#login-btn") as HTMLElement;

      regBtn.addEventListener("click", () => {
        window.location.href = "security/register"
      });

      logBtn.addEventListener("click", () => {
        window.location.href = "security/login"
      })
  }

}
