import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http:HttpClient) { }

  listPathology():Promise<any>{
    return this.http.get(`${environment.base_URL}listPathology`).toPromise();
  }

  addPathology(model:any):Observable<any>{
    return this.http.post(`${environment.base_URL}addPathology`,model);
  }

  getPathologyById(pathologyId:any):Promise<any>{
    return this.http.get(`${environment.base_URL}getPathologyById/${pathologyId}`).toPromise();
  }

  updatePathology(model:any):Observable<any>{
    return this.http.put(`${environment.base_URL}updatePathology`,model);
  }

  deletePathology(pathologyId:any):Observable<any>{
    return this.http.delete(`${environment.base_URL}deletePathology/${pathologyId}`);
  }

  addAssignUserPathology(model :any):Observable<any> {
    return this.http.post(`${environment.base_URL}addAssignUserPathology`,model);
  }

  listAssignUserPathologyById():Promise<any> {
    return this.http.get(`${environment.base_URL}listAssignUserPathology`).toPromise();
  }

  addUserPathology(model :any):Observable<any> {
    return this.http.post(`${environment.base_URL}addUserPathology`,model);
  }

  listUserPathology(userId : any):Promise<any> {
    return this.http.get(`${environment.base_URL}listUserPathology/${userId}`).toPromise();
  }

}
