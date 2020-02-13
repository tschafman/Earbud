import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song';

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
    return this.http.get<Song[]>(this.appURL + this.apiURL).pipe();
  }
}
