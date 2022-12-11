import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipe } from 'src/app/Core/models/equipe';
import { Etudiant } from 'src/app/Core/models/etudiant';
import { EquipeService } from 'src/app/Core/services/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  listEquipe:equipe[];
  idEquipeToDelete:number;
  constructor(private equipeService:EquipeService,private route:Router) { }

  ngOnInit(): void {
    this.equipeService.getAllEquipe().subscribe((data:equipe[])=>this.listEquipe=data);
  }
  
  addEquipe(){
    this.route.navigate(["/equipes/addEquipe"]);
  }

  getIdEquipe(id:number){
   this.idEquipeToDelete=id;
  }

  deleteEquipe(){
   this.equipeService.deleteEquipe(this.idEquipeToDelete).subscribe(()=>this.listEquipe=this.listEquipe.filter(Equipe =>Equipe.idEquipe!=this.idEquipeToDelete));
  }

  membres(listEtudiant:Etudiant[]){
    this.equipeService.listEtudiant=listEtudiant;
  }




}
