import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { niveau } from '../models/enum/niveau';
import { equipe } from '../models/equipe';
import { Etudiant } from '../models/etudiant';
import { Departement } from '../models/departement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  url='http://localhost:8090/Departement/'
public ListDepartement:Departement[];

  constructor(private http:HttpClient) { }
  getDepart(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.url+"getAllDeparts");
  }
  deleteDepartement(id:number){
    return this.http.delete(this.url+"deleteDepart/"+id)
  }
  addDepartement(d:Departement){
   return this.http.post(this.url+"addDepart",d);
  }
  updateDepartement(d:Departement,id:number){
    return this.http.put(this.url+"updateDepart/"+id,d)
  }
}