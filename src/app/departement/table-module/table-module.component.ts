import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { module } from 'src/app/Core/models/module';

@Component({
  selector: 'app-table-module',
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.css']
})
export class TableModuleComponent implements OnInit {
 @Input() ListMod:module[];
 @Output() goToUpdateEvent=new EventEmitter();
 @Output() getIdTooDeleteEvent=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  GoToUpdateModule(id:number){
    this.goToUpdateEvent.emit(id);
  }
  getIdTooDelete(id:number){
    this.getIdTooDeleteEvent.emit(id);
  }

}
