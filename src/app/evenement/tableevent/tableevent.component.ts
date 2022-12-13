import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { evenement } from 'src/app/Core/models/evenement';

@Component({
  selector: 'app-tableevent',
  templateUrl: './tableevent.component.html',
  styleUrls: ['./tableevent.component.css']
})
export class TableeventComponent implements OnInit {
@Output() GoToUpdateEvenementevent =new EventEmitter();
@Output() getIdToDeleteevent =new EventEmitter();
@Input() Listevent:evenement[];
  constructor() { }

  ngOnInit(): void {
  }


  GoToUpdateEvenement(id:number){
    this.GoToUpdateEvenementevent.emit(id);
  };
  getIdToDelete(id:number){
    this.getIdToDeleteevent.emit(id);
  };
}
