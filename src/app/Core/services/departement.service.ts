import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { module } from '../models/module';

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
  addDepartement(d:Departement):Observable<String>{
   return this.http.post<String>(this.url+"addDepart",d);
  }
  updateDepartement(d:Departement,id:number){
    return this.http.put(this.url+"updateDepart/"+id,d)
  }
  getDepById(id:number):Observable<Departement>
  {
   return  this.http.get<Departement>(this.url+"getDepartById"+"/"+id);
  }

  getDepartByNom(nomDepart:String):Observable<Departement>
  {
   return  this.http.get<Departement>(this.url+"getDepartBynom"+"/"+nomDepart);
  }

}