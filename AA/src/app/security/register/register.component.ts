import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  checkData = {
    name: '',
    lname: '',
    email: '',
    username: '',
    password: '',
    conPassword:'',
  };

  onSubmit() :void {
    console.log("User Data: " + this.checkData);
  }

  checkPasswordCriteria(password: string) :boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  }

  ngOnInit(): void {

    const subBtn = document.querySelector(".sub-btn") as HTMLElement;
    const formDiv = document.querySelector(".field-input-parent") as HTMLElement;

    var formDivLength = formDiv.offsetWidth;
    subBtn.style.width = formDivLength + "px"

    
  }

}
