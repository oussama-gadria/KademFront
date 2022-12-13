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
  departement=new Departement();
  retour:String;

  constructor(private route:Router,private departementService:DepartementService) { 
   
  }

 
  ngOnInit(): void {
  }

  GoToAddDep(){
    this.departementService.addDepartement(this.departement).subscribe((data)=>
    {
      this.retour=data
      
      })
      this.route.navigate(['/departement']);
  }
}
