import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea } from '../types/idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  constructor(private http: HttpClient) { }




  createIdea(name: string,
    img: string,
    description: string,
    pieces: number,
    price: number,){
      return this.http.post<Idea>('/api/ideas/create', {name,
        img,
        description,
        pieces,
        price,});
    }
}
