import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  GoToAddModule(){
    this.route.navigate(['departement/AddModule']);
  }

}
