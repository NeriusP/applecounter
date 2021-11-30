import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'applecounter';
  transferedTimes: { x: number, t: number }; // į data-output komponentą perduodami duomenys
  displayInput: boolean = true; // nurodo, kuris komponentas bus rodomas
}
