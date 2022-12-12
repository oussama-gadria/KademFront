import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { club } from 'src/app/Core/models/club';
import { Etudiant } from 'src/app/Core/models/etudiant';
import { ClubService } from 'src/app/Core/services/club.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {
  myformeclub=new FormGroup({ 
    nomClub:new FormControl('',Validators.required),
    managerfname:new FormControl('',Validators.required),
    managerlname:new FormControl('',Validators.required),
    manageremail:new FormControl('',[Validators.required,Validators.email])
  })

  public club_add:club;
  public error_back:Boolean;
  style1="red";
  style2="bold";
  style3="small";
  constructor(private clubservice:ClubService, private route:Router) { }

  ngOnInit(): void {
    this.error_back= false;
    this.club_add = new club;
    this.club_add.responsableClub = new Etudiant;
  }

  add_club(){
    this.clubservice.AddClub(this.club_add,this.club_add.responsableClub.prenomE ,this.club_add.responsableClub.nomE,this.club_add.responsableClub.email).subscribe(
      ()=> this.route.navigate(["club"]),
      ()=>{this.error_back=true,
      ()=>{console.log("complete")}}
    )
  }


}


