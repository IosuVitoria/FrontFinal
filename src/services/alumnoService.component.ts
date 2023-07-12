
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../app/models/alumno.model';
import { Asignatura } from 'src/app/models/asignatura.model';
import { Nota } from '../app/models/nota.models';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  //Para obtener datos del endpoint alumnos.
  private apiUrl = 'http://localhost:5000/alumno';
  //Para obtener datos del endpoint asignaturas.
  private apiUrlA = 'http://localhost:5000/asignaturas';
  //Para obtener datos del endpoint notas.
  private apiUrlN = 'http://localhost:5000/notas'

  constructor(private http: HttpClient) { }

  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  getAsignaturaById(id: string): Observable<Asignatura> {
    const url = `${this.apiUrlA}/${id}`;
    return this.http.get<Asignatura>(url);
  }

  getNotas(): Observable<Nota[]> {
    return this.http.get<Nota[]>(this.apiUrlN);
  }
  
  getNotasByAlumnoId(alumnoId: string): Observable<Nota[]> {
    const url = `${this.apiUrlN}/alumno/${alumnoId}`;
    return this.http.get<Nota[]>(url);
  }
}
