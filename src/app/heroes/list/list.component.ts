import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {

  public heroNames:string[]=['spidermn','iroman','hulk','thor','mikasa ackerman','eren jegger']
  public deletedHero?:string;

  deleteHero():void{
    this.deletedHero=this.heroNames.pop();
  }
}
