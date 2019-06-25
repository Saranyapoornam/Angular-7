import { Component, OnInit } from '@angular/core';
import { AlldataService } from '../alldata.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
h1Style:boolean;
users: Object;
  constructor(private data: AlldataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    }
  );
  }
  firstClick() {
   // console.log('clicked');
    this.h1Style = true;
    this.data.firstClick();
  }
}
