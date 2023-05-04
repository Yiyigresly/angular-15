import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styles: [
    `dd{
      font-size:20px;
      font-weight:bold;
    }`
  ]
})
export class HeroComponent {

   public name:string='mikasa';
   public age:number=34;


   get getName():string{
     return this.name.toUpperCase()
     
   }
   getHeroDescription():string{
      return `${this.name} - ${this.age}`;
    
   }
   changeName():void{
    
     this.name="eren"
   }
   changeAge():void{
     this.age=36;
   }
   resetForm(){
     this.age=34;
     this.name='mikasa'
   }
}
