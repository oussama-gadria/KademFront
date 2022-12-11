import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-evenement',
  templateUrl: './list-evenement.component.html',
  styleUrls: ['./list-evenement.component.css']
})
export class ListEvenementComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {

  }
  GoToAddEvenement(){
this.route.navigate(['evenement/AddEvenement']);

  }

  GoToUpdateEvenement(){
    this.route.navigate(['evenement/UpdateEvenement']);  
}
}
