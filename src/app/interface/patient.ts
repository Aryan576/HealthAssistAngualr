import { Users } from './users';

export interface Patient extends Users {
  patientProfileId: number;
  patientName: String;
  phoneNo: String;
  age: number;
  profilePic: String;
  cityId: number;
  cityName: String;
  userId: number;
  pincode: number;
}
