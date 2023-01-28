import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular 6';

  last_index = 100;

  counter = 100;

  ngOnInit() {
    this.last_index = this.info.substring(0, 100).lastIndexOf(' ');
    if (this.last_index > 100) this.last_index = 100;
    this.counter = this.last_index;
  }

  showTxt = 'Show More';

  toggleSkil() {
    if (this.counter < 101) {
      this.counter = this.info.length;

      this.showTxt = 'Show less';
    } else {
      this.counter = this.last_index;

      this.showTxt = 'Show More';
    }
  }

  firstCount = 100;

  info =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
}
