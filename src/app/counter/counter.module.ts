import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';// No estoy ussando directivas, pipe  comunes lo quito
import { ContadorComponent } from './components/counter/contador.component';

@NgModule({
    declarations: [
      ContadorComponent
    ],
    imports: [ ],
    exports: [
        ContadorComponent
    ],
   
})
export class CounterModule {}