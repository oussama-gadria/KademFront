import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClubComponent } from './add-club/add-club.component';
import { ListClubComponent } from './list-club/list-club.component';
import { UpdateClubComponent } from './update-club/update-club.component';

const routes: Routes = [
  {path:"",component:ListClubComponent},
  {path:"AddClub",component:AddClubComponent},
  {path:"UpdateClub",component:UpdateClubComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubRoutingModule { }
