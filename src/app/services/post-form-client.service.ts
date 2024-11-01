import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ClientData {
  name: string;
  phone: string;
  zipcode: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostFormClientService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  saveClient(data: ClientData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
