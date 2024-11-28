import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarPedidoService {

  private apiUrl = 'http://localhost:8080/orders';

  private apiUrl02 = 'http://localhost:8080/orders/description/1';

  constructor(private http: HttpClient) { }

  getProduros(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateProduto(observacoes: any): Observable<any> {
    return this.http.put<any>(this.apiUrl02, observacoes);
  }
}
