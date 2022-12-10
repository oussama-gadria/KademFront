import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {


  AddFormEtudiant=new FormGroup({  
    nomE:new FormControl('',Validators.required),
    prenomE:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}")]),
    numeroTelephone:new FormControl('',[Validators.required]),
    adresse:new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),
    niveauEtudiant:new FormControl('',Validators.required),
    classe:new FormControl('',Validators.required) ,
    moyenneE:new FormControl('',Validators.required)
  })





  constructor() { }

  ngOnInit(): void {
  }




}
