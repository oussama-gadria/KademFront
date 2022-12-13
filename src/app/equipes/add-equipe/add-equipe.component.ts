import { Component, OnInit } from '@angular/core';
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

 
  listEnseignant:Enseignant[];
  equipe:equipe;


  constructor(private equipeService:EquipeService,private route:Router) {
    this.equipe=new equipe();
   }

  ngOnInit(): void {
    this.equipeService.getAllEnseignant().subscribe((data:Enseignant[])=>this.listEnseignant=data);
  }
  
  save(id:String){
    this.equipeService.addEquipeWithResponsable(this.equipe,id).subscribe(()=>this.route.navigate(['/equipes']));
  }
}
