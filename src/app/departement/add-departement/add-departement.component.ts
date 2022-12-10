import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm.get('name'))
  }

}
