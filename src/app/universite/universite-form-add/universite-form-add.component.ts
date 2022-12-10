import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-universite-form-add',
  templateUrl: './universite-form-add.component.html',
  styleUrls: ['./universite-form-add.component.css']
})
export class UniversiteFormAddComponent implements OnInit {
  myforme=new FormGroup({  
    nomUniversite:new FormControl('',Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  
    
  

}
}
