import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Options } from 'app/models/api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get(url, options) as Observable<T>;
  }
}
