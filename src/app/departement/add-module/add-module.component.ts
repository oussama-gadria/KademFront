import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css']
})
export class AddModuleComponent implements OnInit {

  myFormM = new FormGroup({
    moduleNom: new FormControl('',Validators.required),
    moduleNbr: new FormControl('',Validators.required),
    DepartmentNom:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
