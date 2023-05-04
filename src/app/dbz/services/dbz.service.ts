import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuidv4} from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    private characters:Character[]=[
        { id:uuidv4(),name:'Goku',power:9500},
        { id:uuidv4(),name:'Krillin',power:700},
        { id:uuidv4(),name:'Bulma',power:10}
       
      ];

    get _characters(){
        return structuredClone(this.characters)
    }

   //* Add nuevo caracter, Posible desustructuración,Ojo SOLO tengo 2 campos, No problema:{name,power}:Character
   addCharacter(character:Character):void{

      //* Pero si tuviese Muchos campos, NO ES Recomendable.Mejor así ,uso de operador spread ...variable|argumento
       const newCharacter:Character={id:uuidv4(),...character}

       this.characters.push(newCharacter)
         //Con desustructuración:    const newCharacter:Character={
            //       id:uuidv4(),
            //       name,
            //       power
            //    }
    }

   //* Eliminación , aqui estas recibiendo el id SI O SI 
   onDeleteCharacterById(id:string){

       this.characters=this.characters.filter((c)=>c.id !== id)
       //this.characters.splice(id,1);
          //const idC=this.characters.findIndex((c)=>c.id == id);
          //if( idC !== -1)  this.characters.splice(idC,1);
   }
}