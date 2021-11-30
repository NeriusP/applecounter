import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-output',
  templateUrl: './data-output.component.html',
  styleUrls: ['./data-output.component.css']
})
export class DataOutputComponent implements OnInit {

  @Input() data: { x: number, t: number }; // gaunami vartotojo įvesti duomenys
  @Output() display: EventEmitter<boolean> = new EventEmitter(); // eventas, skirtas tėviniam komponentui pranešti, kad bus atvaizduojamas data-input komponentas

  apples: number; // gautas rezultatas
  timeLeft: number; // nepanaudotas laikas

  constructor() { }


  ngOnInit(): void {
    this.countApples(this.data.x, this.data.t);
  }

  // atlieka skaičiavimus - apdorojamų per duotą laiką obuolių kiekį ir likusį laiką
  countApples(timeForOneApple: number, totalTime: number) {
    this.apples = Math.floor(totalTime / timeForOneApple);
    this.timeLeft = Math.floor(totalTime % timeForOneApple);
  }

  // perduoda app komponentui, kad vėl bus rodomas data-input komponentas
  backToInput() {
    this.display.emit(true);
  }

}
