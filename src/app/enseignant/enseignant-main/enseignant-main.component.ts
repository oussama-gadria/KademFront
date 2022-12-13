import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { EnseignantServiceService } from 'src/app/Core/services/enseignant-service.service';

@Component({
  selector: 'app-enseignant-main',
  templateUrl: './enseignant-main.component.html',
  styleUrls: ['./enseignant-main.component.css']
})
export class EnseignantMainComponent implements OnInit {
  /*----------------------------Les Variables --------------------------------*/
  listEnseignant:Enseignant[];
  listEnsei:Enseignant[];
  idEnseignantDeleted:number;
  searchEnseignant:string="";
  constructor(private enseignantService:EnseignantServiceService,private route:Router) { }

  ngOnInit(): void {
    this.enseignantService.getAllEnseignant().subscribe(data=>this.listEnseignant=data)
  }


/*-------------------------------Get Enseignant--------------------------------*/
  getEnseignantid(id:number){ 
    this.idEnseignantDeleted=id;
  }


/*-------------------------------Delete Enseignant--------------------------------*/
  delete(){ 
    this.enseignantService.deleteEnseignant(this.idEnseignantDeleted).subscribe(()=>this.listEnseignant=this.listEnseignant.filter(Enseignant=>Enseignant.idEnseignant!=this.idEnseignantDeleted));
  }

  /*------------------------------Search Enseignant-------------------------------*/ 
  search() 
  { 
    return this.listEnseignant.filter(univ=> { 
      return univ.nomEnseignant.includes(this.searchEnseignant);
    })
  }
 
  /*---------------------------Les methodes de tri --------------------------------*/
  triDecroissant(){
   this.enseignantService.triEnseignant().subscribe(data=>this.listEnseignant=data)

  }
  tricroissant(){
    this.enseignantService.triEnseignantcroissant().subscribe(data=>this.listEnseignant=data);
   }

   /* ------------------------Go to update Enseignant -----------------------------*/
   gotToEnseignant(id:number){
    this.route.navigate(['enseignant/UpdateEnseignant',id]);
   }

  
}
