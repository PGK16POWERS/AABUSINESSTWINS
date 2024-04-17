import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {

  ngOnInit() {

      const menu = document.querySelector('.burger-menu') as HTMLElement;

      menu.addEventListener("click", () => {
        menu.classList.toggle('open');
      })
      
  }

}
