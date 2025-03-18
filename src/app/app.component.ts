import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: string = ''; // Default to Home view

  // Methods to switch between views
  showHome() {
  }

  showLogin() {
  }

  showTasks() {
  }
}
