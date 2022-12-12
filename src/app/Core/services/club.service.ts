import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { club } from '../models/club';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClubService {
  url='http://localhost:8089/Club/'
  public Listclub:club[];
  constructor(private http:HttpClient) { }
  getAllClubs(): Observable<club[]>{
    return this.http.get<club[]>(this.url+"getAllClubs");
  }
  DeleteClub(id:number){
    return this.http.delete(this.url+"deleteClub/"+id);
  }
  AddClub(club_add:club,prenom:String,nom:String,email:String){
    return this.http.post(this.url+"addClubwithResponsable/"+prenom+"/"+nom+"/"+email,club_add);
  }
  updateClub(id:number,club:club){
    return this.http.put(this.url+'updateClub'+'/'+id,club);
}
assignEtudiantToClubbyId(id:number,idClub:number){
  return this.http.post(this.url+"assignEtudiantToClubbyId/"+id+"/"+idClub,new club);
}

}