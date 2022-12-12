import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { club } from 'src/app/Core/models/club';
import { ClubService } from 'src/app/Core/services/club.service';
import { UpdateClubComponent } from '../update-club/update-club.component';


@Component({
  selector: 'app-list-club',
  templateUrl: './list-club.component.html',
  styleUrls: ['./list-club.component.css']
})
export class ListClubComponent implements OnInit {
Listclub:club[];
idTodelete:number;
searchclub:string="";


constructor(private clubService:ClubService ,private router:Router) { }
@ViewChild(UpdateClubComponent) private updateClubCp:UpdateClubComponent;
 

  ngOnInit(): void {
    this.clubService.getAllClubs().subscribe((data)=>this.Listclub=data);
    console.log(this.Listclub);
  }
  GoToAddClub(){
    this.router.navigate(['club/AddClub']);
  }
    GoToUpdateClub(){
    this.router.navigate(['club/UpdateClub']);  
}
getIdToDelete(id:number)
  {
    this.idTodelete=id;
  }
  
  
  DeleteClub()
  {
    this.clubService.DeleteClub(this.idTodelete).subscribe(()=>this.Listclub=this.Listclub.filter(club=>club.idClub!=this.idTodelete));
  }

  search() 
  { 
    return this.Listclub.filter(club=> { 
      return club.nomClub.includes(this.searchclub);
    })
  }

  up(club:club){
    this.updateClubCp.init(club);
  }
  update(club:club){
    this.clubService.updateClub(club.idClub as number,club).subscribe((res)=>{
      console.log("res",res);
    }) 
    this.clubService.getAllClubs().subscribe(data=>this.Listclub=data);
  }
  
}