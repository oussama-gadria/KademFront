import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departement } from 'src/app/Core/models/departement';
import { BLOC } from 'src/app/Core/models/enum/BLOC';

@Component({
  selector: 'app-update-departmenet',
  templateUrl: './update-departmenet.component.html',
  styleUrls: ['./update-departmenet.component.css']
})
export class UpdateDepartmenetComponent implements OnInit {
  myForm = new FormGroup({
    nomDepart: new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    bloc: new FormControl('',Validators.required)
  })

  constructor() { }

  @Output() updateEvent=new EventEmitter();

  ngOnInit(): void {
  }

  initFormUpdateDep(departement:Departement){

    this.myForm.setValue({
    nomDepart: String(departement.nomDepart), 
    bloc:String(departement.bloc),
  })
}

upEvent(){
    let departementUpdated=this.myForm.value as unknown as Departement; 
    this.updateEvent.emit(departementUpdated);
    this.myForm.reset();
  }
}
