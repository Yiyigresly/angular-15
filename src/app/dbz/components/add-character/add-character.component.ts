import { Component,ViewChild,Output,EventEmitter} from '@angular/core';

import { Character } from '../../interfaces/character.interface';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styles: [
  ]
})
export class AddCharacterComponent {
 //@ViewChild('myform') myform!:NgForm
  @Output() 
   public onNewCharacter:EventEmitter<Character>=new EventEmitter();

   public character:Character={
     name:'',
     power:0
   };

  emitCharacter():void{
      //!debugger;
      //console.log(this.character)
      if(this.character.name.trim().length === 0) return;

      this.onNewCharacter.emit(this.character)
    
      //!Ojo Inicializar como objeto directamente, si lo hago campo a campo NO FUNCIONA
      this.character={name:'',power:0};
    
  }
}
