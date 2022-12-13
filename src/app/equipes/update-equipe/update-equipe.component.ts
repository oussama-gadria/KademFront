import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { equipe } from 'src/app/Core/models/equipe';
import { EquipeService } from 'src/app/Core/services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  myForm=this.formbuilder.group({
    nomEquipe:['',[Validators.required,Validators.pattern("[a-zA-Z ]*")]],
    score:[0,[Validators.required,Validators.min(0),Validators.max(100)]],
    responsable:[0,Validators.required],
    niveau:['',Validators.required],
  })

  listEnseignant:Enseignant[];
  equipe:equipe;
  equipeRetour:equipe
  idEquipe:number;
  style1="red";
  style2="bold";
  style3="small";
  constructor(private formbuilder:FormBuilder,private equipeService:EquipeService,private route:Router,private ActivatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.equipeService.getAllEnseignant().subscribe((data:Enseignant[])=>this.listEnseignant=data);

    this.ActivatedRoute.paramMap.subscribe(data => this.idEquipe = Number(data.get('id')));
   
   this.equipeService.getEquipeById(this.idEquipe).subscribe((data)=>
   {this.equipe=data
      this.myForm.setValue({nomEquipe:String(this.equipe.nomEquipe),  
        score:Number(this.equipe.score), 
        responsable:Number(this.equipe.responsable),
        niveau:String(this.equipe.niveau)},)
    });
  }


  updateEquipe()
  {
     let equipe=this.myForm.value as unknown as equipe
    this.equipeService.updateEquipe(this.idEquipe,equipe).subscribe(
      (data)=>
      {this.equipeRetour=data
      this.route.navigate(['/equipes'])

      })
  }
}
