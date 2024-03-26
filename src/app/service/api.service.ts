import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Curso} from "./curso.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  filterCourses(params: any): Observable<Array<Curso>>{
    return this.http.get<Array<Curso>>('http://localhost:3000/cursos_por_nota', { params })
  }
}

