import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../app/models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class GestionService {
  private apiUrl = 'http://localhost:5000/alumno';

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  getAlumno(id: string): Observable<Alumno> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Alumno>(url);
  }

  addAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno);
  }

  updateAlumno(alumno: Alumno): Observable<Alumno> {
    const url = `${this.apiUrl}/${alumno._id}`;
    return this.http.put<Alumno>(url, alumno);
  }

  deleteAlumno(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
