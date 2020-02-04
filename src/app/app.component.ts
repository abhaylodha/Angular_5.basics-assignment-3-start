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
  log = []

  getColor() {
    return (this.count % 2) === 0 ? "red" : "green";
  }

  onButtonClick() {
    this.count = this.count + 1;
    //this.log.push(this.count)
    this.log.push(new Date())
  }
}

