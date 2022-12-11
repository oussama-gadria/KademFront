import { Component, OnInit, ViewChild } from '@angular/core';
import { EquipeService } from 'src/app/Core/services/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  constructor(private equipeService:EquipeService) { }

  ngOnInit(): void {

  }




}
