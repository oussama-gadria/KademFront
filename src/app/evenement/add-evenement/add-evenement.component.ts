import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { evenement } from 'src/app/Core/models/evenement';
import { EvenementserviceService } from 'src/app/Core/services/evenementservice.service';

@Component({
  selector: 'app-add-evenement',
  templateUrl: './add-evenement.component.html',
  styleUrls: ['./add-evenement.component.css']
})
export class AddEvenementComponent implements OnInit {
  /*myformeevent=new FormGroup({ 
    nomEvenement:new FormControl('',Validators.required),
    dateEvenement:new FormControl('',Validators.required),
    emplacementEvenement: new FormControl('',Validators.required),
  })*/


  event=new evenement();
  idClub:number;
  eventRetour:evenement;
  constructor(private Activatedroute:ActivatedRoute, private eventService:EvenementserviceService,private route:Router) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe(data=>this.idClub=Number(data.get('idClub')));
    console.log(this.idClub);
  }
  AddEvenement()
  {
  this.eventService.Addevent(this.idClub,this.event).subscribe((data)=>
  {this.eventRetour=data
  this.route.navigate(['/evenement'])
  })

   console.log(this.event);

  }

}
