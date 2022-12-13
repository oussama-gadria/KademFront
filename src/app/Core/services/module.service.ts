import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departement } from '../models/departement';
import { module } from '../models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  url='http://localhost:8090/Module/'
public ListModule:module[];

  constructor(private http:HttpClient) { }
  getModule(): Observable<module[]>{
    return this.http.get<module[]>(this.url+"getAllModules");
  }
  deleteModule(id:number){
    return this.http.delete(this.url+"deleteModule/"+id)
  }
  addModuleWithDepName(m:module,nomDep:String){
   return this.http.post<module[]>(this.url+"addmoduletodepartement/"+nomDep,m);
  }
  updateModule(m:module,id:number){
    return this.http.put(this.url+"updateModule/"+id,m)
  }
  getModuleById(id:number):Observable<module>
  {
   return  this.http.get<module>(this.url+"getModuleById"+"/"+id);
  }



}