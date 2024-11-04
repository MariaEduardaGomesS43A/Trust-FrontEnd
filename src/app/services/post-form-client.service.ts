import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ClientData {
  name: string;
  phone: string;
  cep: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostFormClientService {
  private apiUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) {}

  saveClient(data: ClientData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
