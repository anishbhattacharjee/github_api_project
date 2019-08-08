import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {
  users: any;
  repos: any;
  // res: any;
  items: any;


  username: string;
  constructor(private profileservice: ProfileService) {

    this.profileservice.getUserlist().subscribe(p => {
      this.users  = p ;
     //console.log(this.users);

    });


   }

  ngOnInit() {


  }

  setUser(searchRes) {
    this.users = searchRes.items;
    console.log(this.users);
  }


  
  onKey() {
    this.profileservice.getSearchResult(this.username).subscribe(res => {

      // this.users = res.items;
      this.setUser(res);


     // console.log(this.search);

    } );


  }

  showRepo(data){
    // console.log(data);
    this.profileservice.getRepos(data).subscribe(t => {
      this.repos = t;
      // console.log(this.repos);
    });

  }

}
