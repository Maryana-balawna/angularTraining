import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userImg:string = 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg';
placeholder:string='';
data:any[] | undefined;
  constructor() {
   // this.userImg='https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg';
   this.placeholder='http://via.placeholder.com/150';

   }

  ngOnInit(): void {
  }

}
