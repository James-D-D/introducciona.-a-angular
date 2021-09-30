import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
  declarations: [
    ContadorComponent,
  ],
  exports:[
    ContadorComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ContadorModule { }
