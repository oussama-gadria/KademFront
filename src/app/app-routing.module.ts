import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"equipe",component:HomeComponent},
  {path:"universite",loadChildren:()=>import('./universite/universite.module').then(m=>m.UniversiteModule)},
  {path:"enseignant",loadChildren:()=>import('./enseignant/enseignant.module').then(m=>m.EnseignantModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
