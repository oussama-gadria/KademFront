import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { evenement } from 'src/app/Core/models/evenement';
import { EvenementserviceService } from 'src/app/Core/services/evenementservice.service';

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})
export class ListEvenementComponent implements OnInit {
  Listevenement:evenement[];
  idTodelete:number;
  searchevenement:string="";
  constructor(private route:Router,private evenementService:EvenementserviceService) { }

  ngOnInit(): void {
    this.evenementService.getAllEvenements().subscribe((data)=>this.Listevenement=data);
    console.log(this.Listevenement);
  }
  GoToAddEvenement(){
this.route.navigate(['evenement/AddEvenement']);

  }

  GoToUpdateEvenement(id:number){
    this.route.navigate(['evenement/UpdateEvenement',id]);  
}
getIdToDelete(id:number)
  {
    this.idTodelete=id;
  }

  deleteEvenement()
  {
    this.evenementService.deleteEvenement(this.idTodelete).subscribe(()=>this.Listevenement=this.Listevenement.filter(evenement=>evenement.idEvenement!=this.idTodelete));
  }

  search() 
  { 
    return this.Listevenement.filter(evenement=> { 
      return evenement.nomEvenement.includes(this.searchevenement);
    })
  }
}
