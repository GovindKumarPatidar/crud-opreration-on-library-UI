import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Library } from './Library.model';

@Injectable({
    providedIn:'root'
})
export class AppService {
    private GET_LIBRARIES = 'http://localhost:8080/library';
    private GET_BOOKS = 'http://localhost:8080/book/library/';
   
  constructor(private httpClient: HttpClient) { }
  
  getLibraries(){
    return this.httpClient.get(this.GET_LIBRARIES);
  }

  getBooksByLibraryId(libId:number){
    return this.httpClient.get(this.GET_BOOKS+libId);
  }
  
}
