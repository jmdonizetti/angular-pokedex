import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { PokeHeaderComponent } from './poke-header/poke-header.component';



@NgModule({
  declarations: [
    PokeHeaderComponent
  ],
  exports: [
    PokeHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
