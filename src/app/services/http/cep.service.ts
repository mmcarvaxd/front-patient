import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getAddress(cep: string): Promise<any>{
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`).toPromise()
  }
}
