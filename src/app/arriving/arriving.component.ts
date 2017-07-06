import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-arriving',
  templateUrl: './arriving.component.html',
  styleUrls: ['./arriving.component.scss']
})

export class ArrivingComponent implements OnInit {

  stops = [{
    'name': '1200-1300 Seaport Blvd',
    'description': 'parking lot at the circle',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:02 am'
      }, {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:50 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:29 am'
      }, {
        'line': '329',
        'leaves': '8:43 am',
        'arrives': '8:56 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:23 am'
      }, {
        'line': '233',
        'leaves': '9:37 am',
        'arrives': '9:50 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:48 am'
      }, {
        'line': '139',
        'leaves': '11:02 am',
        'arrives': '11:14 am'
      }
    ]
  }, {
    'name': '1400 Seaport Blvd',
    'description': 'crosswalk between buildings 1400A & 1400B',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:03 am'
      },
      {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:51 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:30 am'
      }, {
        'line': '329',
        'leaves': '8:43 am',
        'arrives': '8:57 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:24 am'
      }, {
        'line': '233',
        'leaves': '9:37 am',
        'arrives': '9:51 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:49 am'
      }, {
        'line': '139',
        'leaves': '11:02 am',
        'arrives': '11:15 am'
      }]
  }, {
    'name': '1700 Seaport Blvd',
    'description': '2nd crosswalk in front of building 1700',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:04 am'
      },
      {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:52 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:31 am'
      }, {
        'line': '329',
        'leaves': '8:43 am',
        'arrives': '8:58 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:25 am'
      }, {
        'line': '233',
        'leaves': '9:37 am',
        'arrives': '9:52 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:50 am'
      }, {
        'line': '139',
        'leaves': '11:02 am',
        'arrives': '11:16 am'
      }
    ]
  }, {
    'name': '1900-2000 Seaport Blvd',
    'description': 'circle between building 1900 & 2000',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:06 am'
      },
      {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:54 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:33 am'
      }, {
        'line': '329',
        'leaves': '8:43 am',
        'arrives': '9:00 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:27 am'
      }, {
        'line': '233',
        'leaves': '9:37 am',
        'arrives': '9:54 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:52 am'
      }, {
        'line': '139',
        'leaves': '11:02 am',
        'arrives': '11:18 am'
      }
    ]
  }];


  selectedStop = this.stops[0];

  findETA(arrivalTime: string) {
    const startTime = moment().startOf('minute');
    const endTime = moment(arrivalTime, 'hh:mm a').startOf('minute');
    if (startTime.isAfter(endTime)) {
      endTime.add(1, 'days');
    }
    const duration = moment.duration(endTime.diff(startTime));
    const hours = duration.asHours();
    const minutes = duration.asMinutes();
    if (duration.asMinutes() >= 60) {
      const inHours = Math.floor(hours) + ' hours';
      return inHours;
    } else {
      const inMinutes = minutes + ' minutes';
      return inMinutes;
    }
  }

  ngOnInit() { }

}
