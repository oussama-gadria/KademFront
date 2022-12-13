import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contrat } from 'src/app/Core/models/contrat';

@Component({
  selector: 'app-table-contrat',
  templateUrl: './table-contrat.component.html',
  styleUrls: ['./table-contrat.component.css']
})
export class TableContratComponent implements OnInit {

  constructor() { }
  @Input()  listCont:Contrat[];
  @Output() initTochildEvent=new EventEmitter();
  @Output() getIdToDeletEvent=new EventEmitter();

  ngOnInit(): void {
  }



  initTochild(contrat:Contrat)
  {
  this.initTochildEvent.emit(contrat);
  }

  getIdContratToDelete(id:number)
  {
  this.getIdToDeletEvent.emit(id);
  }
}
