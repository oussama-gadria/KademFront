import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"equipes", loadChildren:()=>import('./equipes/equipes.module').then(m=>m.EquipesModule)},
  {path:"enseignant", loadChildren:()=>import('./enseignant/enseignant.module').then(m=>m.EnseignantModule)},
  {path:"departement", loadChildren:()=>import('./departement/departement.module').then(m=>m.DepartementModule)},
  {path:"etudiant", loadChildren:()=>import('./etudiant/etudiant.module').then(m=>m.EtudiantModule)},
  {path:"evenement", loadChildren:()=>import('./evenement/evenement.module').then(m=>m.EvenementModule)},
  {path:"universite", loadChildren:()=>import('./universite/universite.module').then(m=>m.UniversiteModule)},
  {path:"club", loadChildren:()=>import('./club/club.module').then(m=>m.ClubModule)},
  {path:"**",component:ErrorPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
