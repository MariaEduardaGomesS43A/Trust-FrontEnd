import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface OrderDetails {
  id: number;
  status: string;
  deliveryEstimate: string;
  address: string;
  seller: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  paymentInfo: {
    subtotal: number;
    deliveryFee: number;
    total: number;
    method: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class GetPedidoSucessoService {
  private apiUrl = 'http://localhost:3000/orders';

  constructor(private http: HttpClient) {}

  getOrderDetails(orderId: number): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(`${this.apiUrl}/${orderId}`);
  }
}
