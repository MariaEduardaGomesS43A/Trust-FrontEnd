import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarPedidoService {

  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) { }

  getProduros(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateProduto(nome: string, produtoData: any): Observable<any> {
    const url = `${this.apiUrl}/${nome}`;
    return this.http.put<any>(url, produtoData);
  }
}
