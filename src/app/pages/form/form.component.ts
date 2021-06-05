import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/classes/Patient';
import { CepService } from 'src/app/services/http/cep.service';
import { PatientService } from 'src/app/services/http/patient.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  patient: Patient = new Patient()
  
  constructor(private cepService: CepService, private patientService: PatientService, private route: Router) { }

  ngOnInit(): void {
  }

  async getCEP(event: any) {
    if(event.length === 8) {
      let info = await this.cepService.getAddress(event)
      this.patient.address = info.logradouro;
      this.patient.city = info.localidade;
      this.patient.state = info.uf;
    }
  }

  createPatient() {
    this.patientService.createPatient(this.patient).then(() => {
      this.route.navigate(['/'])
    })
  }
}
