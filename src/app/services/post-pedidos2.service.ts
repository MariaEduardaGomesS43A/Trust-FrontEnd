import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface OrderItem {
  name?: string; // Alterado para incluir nome do prato
  quantity: number;
}

interface OrderRequest {
  clientId: number;
  itens: OrderItem[];
}

@Injectable({
  providedIn: 'root'
})
export class PostPedidos2Service {
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  placeOrder(clientId: number, itens: OrderItem[]): Observable<any> {
    const body: OrderRequest = { clientId, itens }; // Envia o nome e a quantidade
    return this.http.post<any>(this.apiUrl, body);
  }
}
