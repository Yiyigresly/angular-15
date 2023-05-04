import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
  
  <h3>Counter:{{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  
  `,
  styles: [
  ]
})
export class ContadorComponent {

  public counter:number=10;

  increaseBy(value:number):void{
     this.counter+=value;
  }
  reset(){

    this.counter=10
  }
}
