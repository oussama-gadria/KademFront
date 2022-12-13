import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contrat } from 'src/app/Core/models/contrat';

@Component({
  selector: 'app-update-contrat',
  templateUrl: './update-contrat.component.html',
  styleUrls: ['./update-contrat.component.css']
})
export class UpdateContratComponent implements OnInit {



    UpdateContratForm=new FormGroup({ 
    
    dateDebutContrat:new FormControl('',Validators.required),
    dateFinContrat:new FormControl('',Validators.required),
    specialite:new FormControl('',Validators.required),
    archive:new FormControl('',Validators.required),
    montantC:new FormControl(0,Validators.required),
   
  })

  constructor() { }
  @Output() updateEvent=new EventEmitter();

  ngOnInit(): void {
  }



  initFormUpdateContrat(contrat:Contrat)
  {
    
     this.UpdateContratForm.setValue({
      
      dateDebutContrat:String(contrat.dateDebutContrat),  
      dateFinContrat:String(contrat.dateFinContrat), 
      specialite:String(contrat.specialite),
      archive:String(contrat.archive), 
      montantC:Number(contrat.montantC),
      
    }) 
    
  }
  upEvent(){
    let contratUpdated=this.UpdateContratForm.value as unknown as Contrat; 
    this.updateEvent.emit(contratUpdated);
this.UpdateContratForm.reset();
    

   
  }
}
