import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { evenement } from 'src/app/Core/models/evenement';
import { EvenementserviceService } from 'src/app/Core/services/evenementservice.service';

@Component({
  selector: 'app-update-evenement',
  templateUrl: './update-evenement.component.html',
  styleUrls: ['./update-evenement.component.css']
})
export class UpdateEvenementComponent implements OnInit {
  myformeevent=new FormGroup({ 
    nomEvenement:new FormControl('',Validators.required),
    dateEvenement:new FormControl('',Validators.required),
    emplacementEvenement: new FormControl('',Validators.required),
  })
  evenement:evenement;
  idEvenement:number;
  evenementRetour:evenement;
  constructor(private ActivatedRoute:ActivatedRoute , private evenementservice:EvenementserviceService, private route:Router) { }

  

  ngOnInit(): void {

    this.ActivatedRoute.paramMap.subscribe(data => this.idEvenement = Number(data.get('id')));
    console.log(this.idEvenement);
   
   this.evenementservice.getEvenementById(this.idEvenement).subscribe((data)=>
   {this.evenement=data

      this.myformeevent.setValue({
        nomEvenement: String(this.evenement.nomEvenement),  
        dateEvenement:String(this.evenement.dateEvenement), 
        emplacementEvenement:String(this.evenement.emplacementEvenement), 
   })

    });
  }

  updateEvenement()
  {
   
     let evenement =this.myformeevent.value as unknown as evenement
    this.evenementservice.updateEvenement(this.idEvenement,evenement).subscribe(
      (data)=>
      {this.evenementRetour=data
      this.route.navigate(['/evenement'])

      })
  }
}
