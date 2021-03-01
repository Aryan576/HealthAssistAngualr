import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PathologyService {

  constructor(private http:HttpClient) { }

  listPathology():Promise<any>{
    return this.http.get(`${environment.base_URL}listPathology`).toPromise();
  }
}
