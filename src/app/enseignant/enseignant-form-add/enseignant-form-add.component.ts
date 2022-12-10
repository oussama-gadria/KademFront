import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enseignant-form-add',
  templateUrl: './enseignant-form-add.component.html',
  styleUrls: ['./enseignant-form-add.component.css']
})
export class EnseignantFormAddComponent implements OnInit {
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
