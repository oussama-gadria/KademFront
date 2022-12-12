import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { equipe } from 'src/app/Core/models/equipe';
import { EquipeService } from 'src/app/Core/services/equipe.service';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {
  listEquipe:equipe[];
  idEquipeToDelete:number;
  searchEquipe:string="";
  x:equipe;
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

  membres(id:number){
    this.route.navigate(["/equipes/listMembres",id]);
  }

  search() 
  { 
    return this.listEquipe.filter(equipe=> { 
      return equipe.nomEquipe.includes(this.searchEquipe);
    })
  }

  onEditClicked(id:number){
    this.route.navigate(["/equipes/updateEquipe",id]);   
  }






}
