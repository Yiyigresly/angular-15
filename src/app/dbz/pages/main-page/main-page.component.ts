import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html',
    styles:[]
})
export class MainPageComponent  {

  //public characters:Character[]=[];

  get characters(){
      return this._dbzService._characters;
  }

  constructor( private _dbzService:DbzService){}

  
    onDeleteCharacter(id:string):void{
      this._dbzService.onDeleteCharacterById(id)
    }

    addCharacter(character:Character):void{
      this._dbzService.addCharacter(character)
    }

}
