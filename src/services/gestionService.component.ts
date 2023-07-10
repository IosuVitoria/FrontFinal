import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../app/models/alumno.model';
import { Profesor } from '../app/models/profesor.model';
import { Asignatura } from 'src/app/models/asignatura.model';


@Injectable({
  providedIn: 'root'
})
export class GestionService {

  // Manejo de endpoints en función de destino de la petición.

  private apiUrlA = 'http://localhost:5000/alumno';
  private apiUrlP = 'http://localhost:5000/profesor';
  private apiUrlAs = 'http://localhost:5000/asignaturas';

  constructor(private http: HttpClient) { }

 // Manejo de endpoints para los alumnos.

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

 // Manejo de endpoints para los profesores.

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

  updateProfesor(profesor: Profesor): Observable<Profesor> {
    const url = `${this.apiUrlP}/${profesor._id}`;
    return this.http.put<Profesor>(url, profesor);
  }

  deleteProfesor(id: string): Observable<any> {
    const url = `${this.apiUrlP}/${id}`;
    return this.http.delete(url);
  }

  // Manejo de endpoints para las asignaturas.

  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.apiUrlAs);
  }

  getAsignatura(id: string): Observable<Asignatura> {
    const url = `${this.apiUrlAs}/${id}`;
    return this.http.get<Asignatura>(url);
  }

  addAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    return this.http.post<Asignatura>(this.apiUrlAs, asignatura);
  }

  updateAsignatura(asignatura: Asignatura): Observable<Asignatura> {
    const url = `${this.apiUrlAs}/${asignatura._id}`;
    return this.http.put<Asignatura>(url, asignatura);
  }

  deleteAsignatura(id: string): Observable<any> {
    const url = `${this.apiUrlAs}/${id}`;
    return this.http.delete(url);
  }
}
