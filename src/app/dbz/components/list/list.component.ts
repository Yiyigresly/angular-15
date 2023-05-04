import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styles: []
})
export class ListComponent  {

@Input()  
 public characters:Character[]=[];
@Output() 
 public onDeleteId:EventEmitter<string>=new EventEmitter();

 //!-------------------Borrando y CONTROLANDO EL ID undefined o existente-------------------------//
  onDeleteCharacter(id?:string):void{
    //Emitir el id del personaje
    //console.log(id)

     if(!id) return; 
     //!Nunca se llamará mi evento, si el id es indefinido
     this.onDeleteId.emit(id);
  }
}
