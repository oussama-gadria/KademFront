import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { equipe } from 'src/app/Core/models/equipe';
import { EquipeService } from 'src/app/Core/services/equipe.service';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

 
  myForm:any;
  listEquipe:equipe[];
  listEnseignant:Enseignant[];
  equipe:equipe;
  public idE:number;
  style1="red";
  style2="bold";
  style3="small";
  constructor(private formbuilder:FormBuilder,private equipeService:EquipeService,private route:Router) {
    this.myForm=this.formbuilder.group({
      fName:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      fScore:['',[Validators.required,Validators.min(0),Validators.max(100)]],
      fResponsable:['',Validators.required],
      fNiveau:['',Validators.required],
    })
    this.equipe=new equipe();
   }

  ngOnInit(): void {
    this.equipeService.getAllEnseignant().subscribe((data:Enseignant[])=>this.listEnseignant=data);
  }
  
  save(id:String){
    this.equipeService.addEquipeWithResponsable(this.equipe,id).subscribe(()=>this.listEquipe=[this.equipe,...this.listEquipe]);
    console.log(this.myForm);
    this.route.navigate(['/equipes'])

  }
}
