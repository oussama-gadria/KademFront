import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { evenement } from '../models/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementserviceService {
  url='http://localhost:8089/Evenement/'
  constructor(private http:HttpClient) { }

  Addevent(idClub:number,event_add:evenement):Observable<evenement>{
    return this.http.post<evenement>(this.url+"addEvenementWithClubId/"+idClub,event_add);
  }
  getAllEvenements(): Observable<evenement[]>{
    return this.http.get<evenement[]>(this.url+"getAllEvenements");
  }
  deleteEvenement(id:number){
    return this.http.delete(this.url+"deleteEvenement/"+id);
  }

  getEvenementById(id:number):Observable<evenement>
  {
   return  this.http.get<evenement>(this.url+"getEvenementById"+"/"+id);
  }


  updateEvenement(id:number,evenement:evenement)
  {
    return this.http.put<evenement>(this.url+"updateEvenement"+"/"+id,evenement)
  }
}
