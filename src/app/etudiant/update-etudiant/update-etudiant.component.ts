import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from 'src/app/Core/models/etudiant';
import { EtudiantService } from 'src/app/Core/services/etudiant.service';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {
  
  UpdateFormEtudiant=this.fb.group({  
    nomE:["",Validators.required],
    prenomE:["",Validators.required],
    email:["",[Validators.required,Validators.email]],
    numeroTelephone:["",[Validators.required,Validators.minLength(8)]],
    adresse:["",Validators.required],
    age:["",Validators.required],
    niveauEtudiant:[0,Validators.required],
    option:["",Validators.required],
    classe:[0,Validators.required],
   
  })

  etudiant:Etudiant
  etudiantRetour:Etudiant
  IdEtudiant:number
  constructor(private fb:FormBuilder,private ActivatedRoute:ActivatedRoute,private etudiantServ:EtudiantService,private route:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe(data => this.IdEtudiant = Number(data.get('id')));
    console.log(this.IdEtudiant);
   
   this.etudiantServ.getEtudiantById(this.IdEtudiant).subscribe((data)=>
   {this.etudiant=data

      this.UpdateFormEtudiant.setValue({nomE: String(this.etudiant.nomE),  
      prenomE:String(this.etudiant.prenomE), 
      email:String(this.etudiant.email),
      numeroTelephone:String(this.etudiant.numeroTelephone), 
      adresse:String(this.etudiant.adresse),
      age:String(this.etudiant.age),
      niveauEtudiant: Number(this.etudiant.niveauEtudiant),
      option: String(this.etudiant.option), 
      classe: Number(this.etudiant.classe)},)

    });
  }


  updateEtudiant()
  {
   
     let etudiant=this.UpdateFormEtudiant.value as unknown as Etudiant
    this.etudiantServ.updateEtudiant(this.IdEtudiant,etudiant).subscribe(
      (data)=>
      {this.etudiantRetour=data
      this.route.navigate(['/etudiant'])

      })
  }

}
