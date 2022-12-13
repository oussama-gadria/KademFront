import { Injectable } from '@angular/core';
import { Enseignant } from '../models/enseignant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnseignantServiceService {
  url="http://localhost:8089/Enseignant";

  constructor(private http:HttpClient) {}
  getAllEnseignant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.url+'/'+'getAllEnseignant'); 
  }
  getEnseignantById(id:number):Observable<Enseignant>{
    return this.http.get<Enseignant>(this.url+'/'+'getEnseignantById'+'/'+id)
  }
  updateEnseignant(id:number,enseignant:Enseignant){
    return this.http.put(this.url+'/'+'updateEnseignant'+'/'+id,enseignant);
  }
  addEnseignant(enseignant:Enseignant){
    return this.http.post(this.url+'/'+'addEnseignant',enseignant);
  }
  deleteEnseignant(id:number){
    return this.http.delete(this.url+'/'+'deleteEnseignant'+'/'+id);
  }
  addEneignantWithModule(id:String,enseignant:Enseignant ){ 
    return this.http.post(this.url+'/'+'addEnseignantWithModule'+'/'+id,enseignant);
  }
  getEnseignantByUniversiteAndModuleAndDepartement(idUniversite:number,idModule:number,idDepartement:number):Observable<Enseignant[]>{ 
    return this.http.get<Enseignant[]>(this.url+'/'+'getEnseignantByNomUniversite'+'/'+idUniversite+idDepartement+idModule);
  }
  triEnseignantByUniversiteAndModuleAndDepartement(idUniversite:number,idModule:number,idDepartement:number):Observable<Enseignant[]>{ 
    return this.http.get<Enseignant[]>(this.url+'/'+'triEnseignantBySalary'+'/'+idUniversite+'/'+idDepartement+'/'+idModule);
  }
  triEnseignant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.url+'/'+'triEnseignant');
  }
  triEnseignantcroissant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.url+'/'+'triEnseignantcroissant');
  }
 
}
