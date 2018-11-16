import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearTemaPage } from './crear-tema';

@NgModule({
  declarations: [
    CrearTemaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearTemaPage),
  ],
})
export class CrearTemaPageModule {}
