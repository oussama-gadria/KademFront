import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url='http://localhost:8089/Etudiant/'

  constructor(private http:HttpClient) { }

  getAllEtudiant():Observable<Etudiant[]>
  {
   return  this.http.get<Etudiant[]>(this.url+"getAllEtudiant");
  }

  deleteEtudiant(id:number)
  {
    return this.http.delete(this.url+"deleteEtudiant"+'/'+id)
  }
  

  addEtudiant(nomDepart:String,etudiant:Etudiant):Observable<Etudiant>
  {
    return this.http.post<Etudiant>(this.url+"AddEtudiantWithDepart"+"/"+nomDepart,etudiant);
  }

  getEtudiantById(id:number):Observable<Etudiant>
  {
   return  this.http.get<Etudiant>(this.url+"getEtudiantbyId"+"/"+id);
  }


  updateEtudiant(id:number,etudiant:Etudiant)
  {
    return this.http.put<Etudiant>(this.url+"updateEtudiant"+"/"+id,etudiant)
  }

}
