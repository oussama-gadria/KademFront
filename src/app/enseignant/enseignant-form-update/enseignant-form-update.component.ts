import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enseignant-form-update',
  templateUrl: './enseignant-form-update.component.html',
  styleUrls: ['./enseignant-form-update.component.css']
})
export class EnseignantFormUpdateComponent implements OnInit {
  myforme=new FormGroup({  
    nomEnseignant:new FormControl('',Validators.required),
    prenomEnseignant:new FormControl('',Validators.required),
    nomMatiere:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}")]),
    age:new FormControl('',Validators.required),
    salaire:new FormControl('',Validators.required),
    experienceParAnnee:new FormControl('',Validators.required),
    module:new FormControl('',Validators.required)  
  })

  constructor() { }

  ngOnInit(): void {
  }

}
