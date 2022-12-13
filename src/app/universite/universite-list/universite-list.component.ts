import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Departement } from 'src/app/Core/models/departement';
import { Universite } from 'src/app/Core/models/universite';
import { UniversiteServiceService } from 'src/app/Core/services/universite-service.service';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css']
})
export class UniversiteListComponent implements OnInit {
 @Input() UnivList:Universite[];
 @Output()  getAllDeptEvent=new EventEmitter();
 @Output()  getIdUniversiteEvent=new EventEmitter();
 @Output()  upEvent=new EventEmitter();


  constructor(private UniversiteService:UniversiteServiceService) { }

  ngOnInit(): void {
  }
  getAllDepartment(){
  this.getAllDeptEvent.emit();
  }

  getIdUniversite(id:number){
  this.getIdUniversiteEvent.emit(id);
  }
  
  up(universite:Universite){ 
  this.upEvent.emit(universite);
  }

}
