import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent implements OnInit {

  ngOnInit() {
    function toggleMenu() {
      const menu = document.querySelector('.burger-menu') as HTMLElement;
      menu.classList.toggle('open');
    }    
  }

}
