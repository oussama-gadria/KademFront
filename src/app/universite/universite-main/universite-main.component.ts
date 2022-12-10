import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from 'src/app/Core/models/enseignant';
import { Universite } from 'src/app/Core/models/universite';
import { EnseignantServiceService } from 'src/app/Core/services/enseignant-service.service';
import { UniversiteServiceService } from 'src/app/Core/services/universite-service.service';
import { UniversiteFormUpdateComponent } from '../universite-form-update/universite-form-update.component';

@Component({
  selector: 'app-universite-main',
  templateUrl: './universite-main.component.html',
  styleUrls: ['./universite-main.component.css']
})
export class UniversiteMainComponent implements OnInit {

  constructor(private UniversiteService:UniversiteServiceService ,private router:Router) { }
  @ViewChild(UniversiteFormUpdateComponent) private updateUniversiteCp:UniversiteFormUpdateComponent;
  

  UniversiteList:Universite[];
  universite:Universite;
  ngOnInit(): void {
  this.UniversiteService.getAllUniversite().subscribe(data=>this.UniversiteList=data);
  }
  up(universite:Universite){
    this.updateUniversiteCp.init(universite);
  }
  update(universite:Universite){
    this.UniversiteService.updateUniversite(universite.idUniversite as number,universite).subscribe((res)=>{
      console.log("res",res);
    }) 
  }

}
