import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrl: './security.component.css'
})
export class SecurityComponent implements OnInit {

  ngOnInit(): void {
      const regBtn = document.querySelector("#mail-opt") as HTMLElement;

      regBtn.addEventListener("click", () => {
        window.location.href = "security/register"
      });

  }

}
