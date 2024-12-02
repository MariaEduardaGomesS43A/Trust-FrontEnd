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

  private apiUrl02 = 'http://localhost:8080/clients/1';

  constructor(private http: HttpClient) {}

  public order: any;

  getOrderDetails(orderId: number): Observable<OrderDetails> {
    return this.http.get<OrderDetails>(`${this.apiUrl}/${orderId}`);
  }

  public getOrders(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}`);
  }

  public getOrdersPreparing(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/OrderByStatus/PREPARING`);
}

public getOrdersShipped(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/OrderByStatus/SHIPPED`);
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

  public updateOrderToShipped(id: number, code: number) {
    let body = {
      id,
      code
    }
    return this.http.put<any>(`${this.apiUrl}/status/${id}`, body);
  }

  public updateOrderToDelivered(id: number, code: number) {
    let body = {
      id,
      code
    }
    return this.http.put<any>(`${this.apiUrl}/status/${id}`, body);
  }

  public getClient(): Observable<any>{
    return this.http.get<any>(this.apiUrl02);
  }
}
