import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
 
   }
   //get list of users from Github api
getUserlist(){
  return this.httpClient.get("https://api.github.com/users").pipe(map(res => res ));
}
 //get list of repos 
  getRepos(d){
    return this.httpClient.get("https://api.github.com/users/" + d + '/repos').pipe(map(res => res ));
  }
  //get search result
  getSearchResult(data){
    return this.httpClient.get("https://api.github.com/search/users?q=" + data).pipe(map(res => res ));
  }
}
