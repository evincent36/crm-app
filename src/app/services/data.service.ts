
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundErr } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        map(res => res),
        catchError(error => { return throwError(() => new AppError(error)); })
      );
  }

  create(resource: any){
     return this.http.post(this.url, JSON.stringify(resource))
      .pipe(
        map(res => res),
        catchError(error => { return this.handlerError(error); })
      );
  }

  update(resource: any){
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({isRead: true}))
      .pipe(
        map(res => res),
        catchError(error => { return throwError(() => new AppError(error)); })
      );
  }

  delete(id: any){
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        map(res => res),
        catchError(error => { return this.handlerError(error); })
      );
  }

  private handlerError(error: any) {    
    if (error.status === 400) return throwError(() => new BadInput(error));
    else if (error.status === 404) return throwError(() => new NotFoundErr(error));
    else return throwError(() => new AppError(error));
  }

}
