import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  myformeevent=new FormGroup({ 
    nomEvenement:new FormControl('',Validators.required),
    dateEvenement:new FormControl('',Validators.required),
    emplacementEvenement: new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }

}
