import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { club } from 'src/app/Core/models/club';
import { ClubService } from 'src/app/Core/services/club.service';


@Component({
  selector: 'app-list-club',
  templateUrl: './list-club.component.html',
  styleUrls: ['./list-club.component.css']
})
export class ListClubComponent implements OnInit {
Listclub:club[];
idTodelete:number;

  constructor(private route:Router , private clubService:ClubService) { }

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe((data:club[])=>this.Listclub=data);
  }
  GoToAddClub(){
    this.route.navigate(['club/AddClub']);
  }
    GoToUpdateClub(){
    this.route.navigate(['club/UpdateClub']);  
}
getIdToDelete(id:number)
  {
    this.idTodelete=id;
  }
  
  
  DeleteClub()
  {
    this.clubService.DeleteClub(this.idTodelete).subscribe(()=>this.Listclub=this.Listclub.filter(club=>club.idClub!=this.idTodelete));
  }
}