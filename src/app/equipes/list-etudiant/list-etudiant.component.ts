import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Core/models/etudiant';
import { EquipeService } from 'src/app/Core/services/equipe.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  public listEtudiant:Etudiant[];
  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {
    this.listEtudiant=this.equipeService.listEtudiant;
  }

}
