import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SidemenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidemenuComponent,
    FormsModule
  ]
})
export class SharedModule { }
