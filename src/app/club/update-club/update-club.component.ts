import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { club } from 'src/app/Core/models/club';
import { ClubService } from 'src/app/Core/services/club.service';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent implements OnInit {
  Listclub:club[];
  myformeclub=new FormGroup({ 
    idClub:new FormControl(0),
    nomClub:new FormControl('',Validators.required),
    
  })
  constructor(private clubservice:ClubService) { }
  @Output() updateEvent=new EventEmitter();
  ngOnInit(): void {
  }
  init( c:club ){
    this.myformeclub.patchValue({idClub:c.idClub,nomClub:c.nomClub})
}
upEvent(){
  let clubUpdated=this.myformeclub.value as club; 
  this.updateEvent.emit(clubUpdated);
  this.clubservice.getAllClubs().subscribe(data=>this.Listclub=data);
}
}
