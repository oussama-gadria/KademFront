import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteFormAddComponent } from './universite-form-add/universite-form-add.component';
import { UniversiteMainComponent } from './universite-main/universite-main.component';

const routes: Routes = [
  {path:"",component:UniversiteMainComponent},
  {path:"addUniversite",component:UniversiteFormAddComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
