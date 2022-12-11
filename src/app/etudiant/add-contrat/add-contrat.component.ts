import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css']
})
export class AddContratComponent implements OnInit {
  
    AddContratForm=new FormGroup({  
    dateDebutContrat:new FormControl('',Validators.required),
    dateFinContrat:new FormControl('',Validators.required),
    specialite:new FormControl('',Validators.required),
    archive:new FormControl('',Validators.required),
    montantC:new FormControl('',Validators.required),
   
  })

  IdEtudiant:number;

  constructor(private ActivatedRou:ActivatedRoute) { }

  ngOnInit(): void {
    //////recuperation de l'id de l'etudiant 
    this.ActivatedRou.paramMap.subscribe(data => this.IdEtudiant = Number(data.get('id')));
    console.log(this.IdEtudiant);





  }

}
