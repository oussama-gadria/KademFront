import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../models/enseignant';
import { equipe } from '../models/equipe';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  url='http://localhost:8089/equipe/'
  url2="http://localhost:8089/Enseignant";

  public listEtudiant:Etudiant[];

  constructor(private http:HttpClient) {}
  getAllEquipe(): Observable<equipe[]>{
    return this.http.get<equipe[]>(this.url+"get-equipe");
  }
  getEquipeById(id:number): Observable<equipe>{
    return this.http.get<equipe>(this.url+"get-equipe/"+id);
  }
  updateEquipe(e:equipe,id:number){
    return this.http.put(this.url+"modify-equipe/"+id,e)
  }
  addEquipe(e:equipe){
    return this.http.post(this.url+"add-equipe",e);
   }
  deleteEquipe(id:number){
    return this.http.delete(this.url+"remove-equipe/"+id)
  }
  addEquipeWithResponsable(e:equipe,id:String){
    return this.http.post(this.url+"addEquipeWithResponsable/"+id,e)
  }


  getAllEnseignant():Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(this.url2+'/'+'getAllEnseignant'); 
  }
}
