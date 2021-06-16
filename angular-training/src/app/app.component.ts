import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name:string ='angular';
  title = 'angular-training';
  color:string ='pink';
  names:string[]=['a','b','c']
  constructor(){ }
  trackByFn(index: any){
    return index
  }
}
