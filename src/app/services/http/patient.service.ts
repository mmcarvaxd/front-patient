import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Patient } from 'src/app/classes/Patient';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients(): Promise<Patient[]> {
    let url = environment.apiUrl
    
    return this.http.get<Patient[]>(url).toPromise()
  }

  createPatient(patient: Patient): Promise<Patient[]> {
    let url = environment.apiUrl
    
    return this.http.post<Patient[]>(url, patient).toPromise()
  }
}
