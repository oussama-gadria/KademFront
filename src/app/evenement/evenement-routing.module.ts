import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { ListEvenementComponent } from './list-evenement/list-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';

const routes: Routes = [
  
  {path:"",component:ListEvenementComponent},
  {path:"AddEvenement/:idClub",component:AddEvenementComponent},
  {path:"UpdateEvenement/:id",component:UpdateEvenementComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
