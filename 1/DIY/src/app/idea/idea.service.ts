import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idea } from '../types/idea';
import { environment } from 'src/environments/environment';

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


    editIdea(id:string, form: any){
      return this.http.put<Idea>(`/api/ideas/${id}/update`, {id, ...form});

    }


    getIdeas() {
      return this.http.get<Idea[]>(`/api/ideas/catalog`)
    }

    getIdea(id:string) {
      return this.http.get<Idea>(`/api/ideas/${id}/details`);
    }


    deleteIdea(id:string) {
      return this.http.delete<Idea>(`/api/ideas/${id}/details`);
    }


    likeIdea(id:string){ 
      return this.http.put<Idea>(`/api/ideas/${id}/details`, {like: true });
    }

    dislikeIdea(id:string){
      return this.http.put<Idea>(`/api/ideas/${id}/details`, {like: false});
    }

    buyIdea(id:string){
      return this.http.put<Idea>(`/api/ideas/${id}/details/buy`, {buy: true});
    }

    commentIdea(id:string, comment: string){
      return this.http.post<Idea>(`/api/ideas/${id}/details/comment`, {comment});
    }
}

