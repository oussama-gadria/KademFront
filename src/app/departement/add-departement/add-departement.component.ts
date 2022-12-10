import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Core/models/departement';
import { DepartementService } from 'src/app/Core/services/departement.service';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl('',Validators.required),
    bloc: new FormControl('',Validators.required)
  })
  constructor(private route:Router,private departementService:DepartementService) { }
  ListDepart:Departement[];
  ngOnInit(): void {
  }

  GoToAddDep(){
    
    this.route.navigate(['departement']);
    this.departementService.getDepart().subscribe((data:Departement[])=>this.ListDepart=data);
  }
}
