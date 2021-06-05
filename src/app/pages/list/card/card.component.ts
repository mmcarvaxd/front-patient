import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/classes/Patient';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() patient: Patient

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
