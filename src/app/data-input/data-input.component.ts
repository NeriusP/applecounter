import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent implements OnInit {

  @Output() transfer: EventEmitter<{ x: number, t: number }> = new EventEmitter(); 

  xIsNotGoodNumber: boolean = false; // iššaukia templeito pranešimą, kai x yra netinkamas skaičius
  tIsNotGoodNumber: boolean = false; // iššaukia templeito pranešimą, kai t yra netinkamas skaičius

  constructor() { }

  ngOnInit(): void {
  }

  // patikrina, ar įvesti teigiami skaičiai, jei taip, paverčia juos sveikaisiais ir perduoda duomenis į tėvinį komponentą
  checkAndTransferData(timeForOneApple: number, totalTime: number) {
    if (isNaN(timeForOneApple) || timeForOneApple <= 0) {
      this.xIsNotGoodNumber = true;
    } else this.xIsNotGoodNumber = false;
    if (isNaN(totalTime) || totalTime <= 0) {
      this.tIsNotGoodNumber = true;
    } else this.tIsNotGoodNumber = false;
    if (this.xIsNotGoodNumber || this.tIsNotGoodNumber) {
      return;
    }
    timeForOneApple = Math.floor(timeForOneApple);
    totalTime = Math.floor(totalTime);
    this.transfer.emit({ x: timeForOneApple, t: totalTime });
    this.xIsNotGoodNumber = false;
    this.tIsNotGoodNumber = false;
  }

}
