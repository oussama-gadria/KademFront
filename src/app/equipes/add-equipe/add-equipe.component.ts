import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  //myForm=new FormGroup({
   // fName:new FormControl,
   // fScore:new FormControl
  //})
  myForm:any;
  constructor(private formbuilder:FormBuilder) {
    this.myForm=this.formbuilder.group({
      fName:['',Validators.required],
      fScore:['',Validators.required,Validators.min(0),Validators.max(100)]
    })
   }

  ngOnInit(): void {
  }


  print(){
    console.log(this.myForm.value);
  }
}
