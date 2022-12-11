import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent implements OnInit {
  myformeevent=new FormGroup({ 
    nomEvenement:new FormControl('',Validators.required),
    dateEvenement:new FormControl('',Validators.required),
    emplacementEvenement: new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

}
