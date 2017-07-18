import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
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
