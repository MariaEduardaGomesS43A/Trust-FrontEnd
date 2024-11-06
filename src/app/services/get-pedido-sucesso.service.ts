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
  private apiUrl = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  public order: any;

  getOrderDetails(orderId: number): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(`${this.apiUrl}/${orderId}`);
  }

  public getOrders(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}`);
  }

  public setOrder(order: any) {
    this.order = order;
  }

  public getOrder() {
    return this.order;
  }

  public deleteOrder(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/status/${id}`)
  }
}
