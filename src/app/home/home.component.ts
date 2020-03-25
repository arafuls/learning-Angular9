import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter: number = 0;
  name: string = 'Hello World!';

  constructor() { }

  ngOnInit(): void {
  }

  countClick() {
    this.clickCounter += 1;
  }

  setClasses() {
    let myClasses = {
      // Defined within home.component.scss
      active: this.clickCounter > 4,
      notactive: this.clickCounter <= 4,
    }
    return myClasses;
  }

}
