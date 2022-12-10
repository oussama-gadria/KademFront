import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  addEquipe(){
    this.route.navigate(["/equipes/addEquipe"]);
  }


}
