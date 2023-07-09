import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../../Front/src/app/models/alumno.model';
import { Profesor } from '../app/models/profesor.model';


@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private apiUrlA = 'http://localhost:5000/alumno';
  private apiUrlP = 'http://localhost:5000/profesor'

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrlA);
  }

  getAlumno(id: string): Observable<Alumno> {
    const url = `${this.apiUrlA}/${id}`;
    return this.http.get<Alumno>(url);
  }

   addAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrlA, alumno);
  }

  updateAlumno(alumno: Alumno): Observable<Alumno> {
    const url = `${this.apiUrlA}/${alumno._id}`;
    return this.http.put<Alumno>(url, alumno);
  }

  deleteAlumno(id: string): Observable<any> {
    const url = `${this.apiUrlA}/${id}`;
    return this.http.delete(url);
  }

//Métodos para el servicio a profesores.

  getProfesores(): Observable<Profesor[]> {
    return this.http.get<Profesor[]>(this.apiUrlP);
  }

  getProfesor(id: string): Observable<Profesor> {
    const url = `${this.apiUrlP}/${id}`;
    return this.http.get<Profesor>(url);
  }

   addProfesor(profesor: Profesor): Observable<Profesor> {
    return this.http.post<Profesor>(this.apiUrlP, profesor);
  }

  updateProfesor(profesor: Profesor): Observable<Alumno> {
    const url = `${this.apiUrlP}/${profesor._id}`;
    return this.http.put<Alumno>(url, profesor);
  }

  deleteProfesor(id: Profesor): Observable<any> {
    const url = `${this.apiUrlP}/${id}`;
    return this.http.delete(url);
  }
}
