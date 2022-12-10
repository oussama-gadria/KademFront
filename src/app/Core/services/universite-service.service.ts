import { Injectable } from '@angular/core';
import { Universite } from '../models/universite';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversiteServiceService {

  url="http://localhost:8091/Universite";
  constructor(private http:HttpClient) { }
  getAllUniversite(){
    return this.http.get<Universite[]>(this.url+'/'+'getAllUniversite'); 
  }
  getUniversiteById(id:number){
    return this.http.get<Universite>(this.url+'/'+'getUniversiteById'+'/'+id)
  }
  updateUniversite(id:number,universite:Universite){
    return this.http.put(this.url+'/'+'updateUniversite'+'/'+id,universite);
  }
  addUniversite(universite:Universite){
    return this.http.post(this.url+'/'+'addUniversite'+'/',universite);
  }
  deleteUniversite(id:number){
    return this.http.delete(this.url+'/'+'deleteUniversite'+'/'+id);
  }
  addDepartementToUniversite(idUniversite:number,idDepartement:number){
    return this.http.post(this.url+'/'+'addDepartementToUniversite'+'/'+idUniversite+'/'+idDepartement,null);
  }
  getDepartementByIdUniversite(idUniversite:number){
    return this.http.get(this.url+'/'+'getDepartmentByUniversite'+'/'+idUniversite)
  }
  getChiffreAffaire(startDate:Date,endDate:Date){ 
    return this.http.get(this.url+'/'+'getChiffreAffaireEntreDeuxDate'+'/'+startDate+'/'+endDate)
  }
  getDetailsUniversite(idUniversite:number){
    return this.http.get(this.url+'/'+idUniversite);
  }
  getEvenementByIdUniversite(idUniversite:number,startDate:Date,endDate:Date){
    return this.http.get(this.url+'/'+idUniversite+'/'+startDate+'/'+endDate);
  }
}
