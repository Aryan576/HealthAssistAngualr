import { Users } from './users';

export interface Pharmacy extends Users {
  pharmacyId: number;
  pharmacyName: string;
  pharmacyTimings: string;
  address: string;
  phoneNo: number;
  rating: number;
  about: string;
  lat: number;
  log: number;
  cityId: number;
  cityName: string;
  pincode: number;
}
