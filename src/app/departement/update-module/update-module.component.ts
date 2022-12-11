import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-module',
  templateUrl: './update-module.component.html',
  styleUrls: ['./update-module.component.css']
})
export class UpdateModuleComponent implements OnInit {

  myFormM = new FormGroup({
    moduleNom: new FormControl('',Validators.required),
    moduleNbr: new FormControl('',Validators.required),
    DepartmentNom:new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
