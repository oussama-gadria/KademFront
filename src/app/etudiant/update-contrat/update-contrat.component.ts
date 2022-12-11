import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    montantC:new FormControl('',Validators.required),
   
  })

  constructor() { }

  ngOnInit(): void {
  }

}
