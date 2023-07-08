import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Evento } from '../models/evento.model'

@Injectable({
  providedIn: 'root',
})

export class ServiceComponent {
    db_url: string = "http://localhost:3000/eventos";
  
    constructor(private http: HttpClient) {}
  
    getEventos(): Observable<Evento[]> {
      return this.http.get<Evento[]>(this.db_url);
    }
  
    eliminarEvento(id: number): Observable<any> {
      return this.http.delete(`${this.db_url}/${id}`);
    }
  
    agregarEvento(evento: Evento): Observable<any> {
      return this.http.post(this.db_url, evento);
    }
  }
