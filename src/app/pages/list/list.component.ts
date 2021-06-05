import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listAnimation } from 'src/app/animations/list.animation';
import { Patient } from 'src/app/classes/Patient';
import { PatientService } from 'src/app/services/http/patient.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations:[
    listAnimation
  ]
})
export class ListComponent implements OnInit {
  patients: Patient[] = []

  patientList: Patient[] = []

  filter: string = ""
  constructor(private patientService: PatientService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.patientList = this.patients = await this.patientService.getPatients()
  }

  filterChanged (event: string) {
    this.patientList = this.patients.filter((a: Patient) => a.name.toUpperCase().indexOf(event.toUpperCase()) !== -1)
  }

  goToRegister() {
    this.router.navigate(['/register'])
  }
}
