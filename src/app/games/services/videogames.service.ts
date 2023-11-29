import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Videogame, Videogames } from '../interfaces/videogame';

@Injectable({ providedIn: 'root' })
export class VideogameService {
  constructor(private http: HttpClient) { }


  private apiUrl: string = "https://api.rawg.io/api/games?search=";
  private apiKey: string = "55106581e40f4791b1e7b5cc7e984a02";

  getGamesName(term: string): Observable<Videogames> {
    const url = `${this.apiUrl}${term}&key=${this.apiKey}`;
    return this.http.get<Videogames>(url)

  }
}


