export interface Appointment {
  appointmentId: number;
  patientProfileId: number;
  doctorProfileId: number;
  appointmentStatusId: number;
  appointmentCreateDate: Date;
  comment: String;
  clinicId: number;
  reference: String;
  complain: String;
  appointmentDate: Date;
  appointmentTime: String;
  patientName: String;
  statusName: String;
  firstName: String;
  lastName: String;
  clinicName: String;
  statusReason: String;
  email: String;
  phoneNo: String;
  gender: String;
  age: number;
  followupComment: String;
  description:String;
  prescriptionDate:Date;
  generalAdvice:String;

}
