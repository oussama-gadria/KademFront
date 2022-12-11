import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.css']
})
export class UpdateClubComponent implements OnInit {
  myformeclub=new FormGroup({ 
    nomClub:new FormControl('',Validators.required),
    
  })
  constructor() { }

  ngOnInit(): void {
  }

}
