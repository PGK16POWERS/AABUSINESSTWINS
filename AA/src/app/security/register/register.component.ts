import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {

    const subBtn = document.querySelector(".sub-btn") as HTMLElement;
    const formDiv = document.querySelector(".field-input-parent") as HTMLElement;

    var formDivLength = formDiv.offsetWidth;
    subBtn.style.width = formDivLength + "px"

    
  }

}
