import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  todayDate: Date;

  constructor() { }

  ngOnInit() {
    this.liveClock();
  }

  liveClock() {
    setInterval(() => {
      this.todayDate = new Date();
      // console.log(this.myDate);
    }, 1000);
  }

}
