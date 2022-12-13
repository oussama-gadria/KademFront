import { Component, Input, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Core/models/etudiant';

@Component({
  selector: 'app-table-etudiant',
  templateUrl: './table-etudiant.component.html',
  styleUrls: ['./table-etudiant.component.css']
})
export class TableEtudiantComponent implements OnInit {
  @Input() listEtudiant:Etudiant[];
  constructor() { }

  ngOnInit(): void {
  }

}
