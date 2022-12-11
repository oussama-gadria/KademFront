import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { AddClubComponent } from './add-club/add-club.component';
import { UpdateClubComponent } from './update-club/update-club.component';
import { ListClubComponent } from './list-club/list-club.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddClubComponent,
    UpdateClubComponent,
    ListClubComponent,
  ],

  imports: [
    CommonModule,
    ClubRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ClubModule { }
