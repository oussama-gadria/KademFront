import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/Core/models/contrat';
import { ContratService } from 'src/app/Core/services/contrat.service';


@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css'],

})
export class AddContratComponent implements OnInit {
  /*
    AddContratForm=new FormGroup({  
    dateDebutContrat:new FormControl('',Validators.required),
    dateFinContrat:new FormControl('',Validators.required),
    specialite:new FormControl('',Validators.required),
    archive:new FormControl('',Validators.required),
    montantC:new FormControl('',Validators.required),
   
  })*/



  IdEtudiant:number;
  contrat=new Contrat();
  contratRetour:Contrat
  constructor(private ActivatedRou:ActivatedRoute,private ContratServ:ContratService,private route:Router)  { }

  ngOnInit(): void {
    //////recuperation de l'id de l'etudiant 
    this.ActivatedRou.paramMap.subscribe(data => this.IdEtudiant = Number(data.get('id')));
    console.log(this.IdEtudiant);
  }



  AddContrat()
  {
   this.ContratServ.addContrat(this.IdEtudiant,this.contrat).subscribe((data)=>
   {this.contratRetour=data
   this.route.navigate(['/etudiant/ListContrat']);
   })
  console.log(this.contrat);
  }
}
