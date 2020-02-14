import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  apiURL: string;
  appURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'api/Songs';
    this.appURL = environment.appUrl;
  }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.appURL + this.apiURL).pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
