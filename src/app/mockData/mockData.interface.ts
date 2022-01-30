export interface MockData {
  name: string;
  lastSigned: Date;
}

export interface PatientInfo {
  urn: string;
  patient: string;
  dob: string | Date;
  referralSys: string | Date;
  practiceAddr: string;
  practiceTel?: string;
  referrer: string;
  reason: string;
  clinicalActivity?: string;
  reciver?: string;
  radiographs: string;
  primaryCare: string;
  secondaryCare: string;
  tertiaryCare: string;
  triageDate: string | Date;
  commentsRef: string;
  commentsTriager: string;
}
