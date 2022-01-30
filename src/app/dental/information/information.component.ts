import { Component, OnInit } from '@angular/core';
import { fieldsName, patientInfo } from 'src/app/mockData/mockData';
import { PatientInfo } from 'src/app/mockData/mockData.interface';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
})
export class InformationComponent implements OnInit {
  public patientInfo: PatientInfo[] = [patientInfo];
  public fieldsInfo: PatientInfo[] = [fieldsName];
  public color = '';

  constructor() {}

  ngOnInit(): void {
    this.checkYesNo();
  }

  checkYesNo(): void {
    for (const patinet of this.patientInfo) {
      if (patinet.radiographs.toLocaleLowerCase() === 'no') {
        this.color = 'red';
      } else if (patinet.radiographs.toLocaleLowerCase() === 'yes') {
        this.color = 'green';
      }
    }
  }
}
