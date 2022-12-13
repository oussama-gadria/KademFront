import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Universite } from 'src/app/Core/models/universite';
import { UniversiteServiceService } from 'src/app/Core/services/universite-service.service';

@Component({
  selector: 'app-universite-form-add',
  templateUrl: './universite-form-add.component.html',
  styleUrls: ['./universite-form-add.component.css']
})
export class UniversiteFormAddComponent implements OnInit {
  /*-----------------------Les Variables ---------------------- */
  universite:Universite;
  universiteList:Universite[];
  myforme:any;
  constructor(private universiteService:UniversiteServiceService,private route:Router) { 
    this.universite=new Universite();
  }


  ngOnInit(): void {
}

/*----------------------Save Universite-----------------------------*/
 save(){ 
     console.log(this.universite);
     this.universiteService.addUniversite(this.universite).subscribe((data)=> this.route.navigate(['/universite']))
     this.universiteService.getAllUniversite().subscribe(data=>this.universiteList==data);
 }

}
