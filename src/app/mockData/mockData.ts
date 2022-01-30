import { MockData, PatientInfo } from './mockData.interface';

export const mockData: MockData = {
  name: 'Test Practice, post code - ivan+practice@ralabs.org',
  lastSigned: new Date(2022, 0, 28, 10, 19),
};

export const patientInfo: PatientInfo = {
  urn: 'TST0000422',
  patient: 'dsaadssd',
  dob: new Date(1990, 10, 11),
  referralSys: new Date(2020, 9, 16),
  practiceAddr: 'test_practice',
  referrer: 'sdfdsfdsf',
  reason: 'Urgent 2WW Referral',
  radiographs: 'No',
  primaryCare: 'Urgent 2WW Referral',
  secondaryCare: 'Urgent 2WW Referral',
  tertiaryCare: 'Urgent 2WW Referral',
  triageDate: 'Urgent 2WW Referral',
  commentsRef: 'Urgent 2WW Referral',
  commentsTriager: 'Urgent 2WW Referral',
};

export const fieldsName: PatientInfo = {
  urn: 'URN',
  patient: 'Patient',
  dob: "Patient's DOB",
  referralSys: 'Referral Entered the System',
  practiceAddr: 'Practice Address',
  practiceTel: 'Practice Telephone',
  referrer: 'Referrer',
  reason: 'Referral Reason',
  clinicalActivity: 'Clinical Activity',
  reciver: 'Reciver',
  radiographs: 'Radiographs',
  primaryCare: 'Primary care choice',
  secondaryCare: 'Secondary care choice',
  tertiaryCare: 'Tertiary care choice',
  triageDate: 'Triage Date',
  commentsRef: 'Comments to Referrer',
  commentsTriager: 'Comments from Triager',
};
