import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  ///////////routage 
  GoToAddEtudiant()
  {
    this.route.navigate(['etudiant/AddEtudiant']);
  }
  GoToAddContrat(id:number)
  {
    this.route.navigate(['etudiant/AddContrat',id]);
  }
  GoToUpdateEtudiant()
  {
    this.route.navigate(['etudiant/UpdateEtudiant'])
  }
/////////////////
}
