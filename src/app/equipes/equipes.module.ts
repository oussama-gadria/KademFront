import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipesRoutingModule } from './equipes-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { TableEtudiantComponent } from './table-etudiant/table-etudiant.component';




@NgModule({
  declarations: [
    ListEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    ListEtudiantComponent,
    TableEtudiantComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EquipesModule { }
