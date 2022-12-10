import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Universite } from 'src/app/Core/models/universite';

@Component({
  selector: 'app-universite-form-update',
  templateUrl: './universite-form-update.component.html',
  styleUrls: ['./universite-form-update.component.css']
})
export class UniversiteFormUpdateComponent implements OnInit {
 myforme=new FormGroup({
  idUniversite:new FormControl(0),  
  nomUniversite:new FormControl('',Validators.required)
})
 
  constructor() { }
  @Output() updateEvent=new EventEmitter();

  ngOnInit(): void {
    
  }
  init( u:Universite){
    this.myforme.patchValue({idUniversite:u.idUniversite,nomUniversite:u.nomUniversite})
  }
  upEvent(){
    let universiteUpdated=this.myforme.value as Universite; 
    this.updateEvent.emit(universiteUpdated);
  }

 
}
