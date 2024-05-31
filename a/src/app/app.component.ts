import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'a';

  ngOnInit() {
    const serviceChildren = document.querySelectorAll(".service-child") as NodeListOf<HTMLElement>;

    serviceChildren.forEach(child => {

      const viewDetailLink = child.querySelector(".service-link") as HTMLElement;
      const detailParent = child.querySelector(".details-div") as HTMLElement;
      const hideLink = child.querySelector(".hide-link") as HTMLElement;

      viewDetailLink.addEventListener("click", () => {
        detailParent.style.display = "flex";
        child.style.width = "100%";
        viewDetailLink.style.display = "none";
      });

      hideLink.addEventListener("click", () => {
        detailParent.style.display = "none";
        child.style.width = "";
        viewDetailLink.style.display = "flex";
      });

    });
  }
}
