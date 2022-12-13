import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { equipe } from 'src/app/Core/models/equipe';
import { EquipeService } from 'src/app/Core/services/equipe.service'; 

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  public idEquipe:number;
  public equipe:equipe;
  constructor(private equipeService:EquipeService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => this.idEquipe = Number(data.get('id'))); //recuperer l'id equipe depuis l'url

    this.equipeService.getEquipeById(this.idEquipe).subscribe((data)=>{this.equipe=data}); //rajaat l'equipe li bech nekhou menha les etudiants par id equipe
  }


}
