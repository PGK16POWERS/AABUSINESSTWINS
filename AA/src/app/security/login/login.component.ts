import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  ngOnInit(): void {

    const subBtn = document.querySelector(".sub-btn") as HTMLElement;
    const formDiv = document.querySelector(".field-input-parent") as HTMLElement;

    var formDivLength = formDiv.offsetWidth;
    subBtn.style.width = formDivLength + "px"

    
  }

}
