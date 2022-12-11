import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-departmenet',
  templateUrl: './update-departmenet.component.html',
  styleUrls: ['./update-departmenet.component.css']
})
export class UpdateDepartmenetComponent implements OnInit {
  myForm = new FormGroup({
    name: new FormControl('',Validators.required),
    bloc: new FormControl('',Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

}
