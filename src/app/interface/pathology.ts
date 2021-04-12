import { Users } from "./users";

export interface Pathology extends Users {
  pathologyId:number;
	pathologyName:string;
	pathologyTimings:string;
	address:string;
	phoneNo:number;
	rating:number;
	about:string;
	lat:number;
	log:number;
	cityId:number;
  cityName:String;
	pincode:number;
}
