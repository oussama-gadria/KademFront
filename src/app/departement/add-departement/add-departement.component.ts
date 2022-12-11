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

  ListDepart:Departement[];
  departement:Departement

  myForm = new FormGroup({
    name: new FormControl('',Validators.required),
    bloc: new FormControl('',Validators.required)
  })
  constructor(private route:Router,private departementService:DepartementService) { 
    this.departement=new Departement();
  }

 
  ngOnInit(): void {
  }

  GoToAddDep(){
    this.departementService.addDepartement(this.departement).subscribe(()=>this.ListDepart=[this.departement,...this.ListDepart]);
    this.route.navigate(['departement']);
  }
}
