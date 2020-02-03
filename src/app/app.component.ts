import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `.w {
          color: white;
    }`
  ]
})
export class AppComponent {
  count = 1
  numbers = [1]

  getColor() {
    return (this.count % 2) === 0 ? "red" : "green";
  }

  onButtonClick() {
    this.count = this.count + 1;
    this.numbers.push(this.count)
  }

  getBackColor(number) {
    return (number > 5) ? "blue" : "white";
  }

  getTextColor(number) {
    return (number > 5) ? "white" : "blue";
  }

}
