import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {

  greeting = "hello";
  toggleGreeting() {
    this.greeting = this.greeting === "hello" ? "whats up" : "hello";
  }

}
