import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Prato {
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostPedidosService {
  apiUrl = "http://localhost:8080/dishes"

  constructor(private http: HttpClient) { }

  enviarPrato(prato: Prato): Observable<Prato> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Prato>(this.apiUrl, prato, { headers });
  }
}
