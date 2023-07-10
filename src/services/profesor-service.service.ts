import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {
  console=console
  urlApi: string = "http://localhost:5000"
  profesor: any[] = [];
  id!:number;
  profesorId!: number;
 
  public profesorData = { 
    id:'',
    email: '',
    telefono: '',  
    nombre: '', 
    apellidos: ''
      
  };

  constructor(private http: HttpClient) {} 
    
    getProfesor(id: any) {
      
      return this.http.get(`${this.urlApi}/profesor/${id}`);
    }
    // deleteNota(id: number) { // para eliminar notas mal cargadas
    //   return this.http.delete(`${this.urlApi}/${id}`);
    // }
    // postNota(producto: any) { // agragar nota
    //   return this.http.post(this.urlApi, nota);
    // }   

    modifyDatos(profesor: any) {
      const primerProfesor = profesor[0];
      this.profesorData.id = primerProfesor._id;
      this.profesorData.nombre = primerProfesor.nombre;
      this.profesorData.apellidos = primerProfesor.apellidos;
      this.profesorData.email = primerProfesor.email;
      this.profesorData.telefono = primerProfesor.telefono;
      
  
      console.log(this.profesorData.nombre);
    }
    putProfesor(profesorId: any, profesorData: any) {
      console.log(this.profesorData);
      console.log(this.profesorId);
      return this.http.put(`${this.urlApi}/profesor/${this.profesorData.id}`, profesorData);
  
    }

    getAsignatura() {
      
      return this.http.get(`${this.urlApi}/asignaturas/`);
    }
}