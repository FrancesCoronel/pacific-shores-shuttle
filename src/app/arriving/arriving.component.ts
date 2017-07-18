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
    'duration': '10',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:02 am'
      }, {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:47 am'
      }, {
        'line': '221',
        'leaves': '8:11 am',
        'arrives': '8:21 am'
      }, {
        'line': '329',
        'leaves': '8:37 am',
        'arrives': '8:47 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:21 am'
      }, {
        'line': '233',
        'leaves': '9:35 am',
        'arrives': '9:45 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:46 am'
      }, {
        'line': '139',
        'leaves': '11:00 am',
        'arrives': '11:10 am'
      }
    ]
  }, {
    'name': '1400 Seaport Blvd',
    'description': 'crosswalk between buildings 1400A & 1400B',
    'duration': '11',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:03 am'
      },
      {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:48 am'
      },
      {
        'line': '221',
        'leaves': '8:11 am',
        'arrives': '8:22 am'
      }, {
        'line': '329',
        'leaves': '8:37 am',
        'arrives': '8:48 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:22 am'
      }, {
        'line': '233',
        'leaves': '9:35 am',
        'arrives': '9:46 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:47 am'
      }, {
        'line': '139',
        'leaves': '11:00 am',
        'arrives': '11:11 am'
      }]
  }, {
    'name': '1700 Seaport Blvd',
    'description': '2nd crosswalk in front of building 1700',
    'duration': '12',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:04 am'
      },
      {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:49 am'
      }, {
        'line': '221',
        'leaves': '8:11 am',
        'arrives': '8:23 am'
      }, {
        'line': '329',
        'leaves': '8:37 am',
        'arrives': '8:49 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:23 am'
      }, {
        'line': '233',
        'leaves': '9:35 am',
        'arrives': '9:47 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:48 am'
      }, {
        'line': '139',
        'leaves': '11:00 am',
        'arrives': '11:12 am'
      }
    ]
  }, {
    'name': '1900-2000 Seaport Blvd',
    'description': 'circle between building 1900 & 2000',
    'duration': '14',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '7:06 am'
      },
      {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:51 am'
      }, {
        'line': '221',
        'leaves': '8:11 am',
        'arrives': '8:25 am'
      }, {
        'line': '329',
        'leaves': '8:37 am',
        'arrives': '8:51 am'
      }, {
        'line': '231',
        'leaves': '9:11 am',
        'arrives': '9:25 am'
      }, {
        'line': '233',
        'leaves': '9:35 am',
        'arrives': '9:49 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:50 am'
      }, {
        'line': '139',
        'leaves': '11:00 am',
        'arrives': '11:14 am'
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

  findDuration(departureTime: string, arrivalTime: string) {
    const arrive = moment(arrivalTime, 'hh:mm a');
    const depart = moment(departureTime, 'hh:mm a');
    return (moment.duration(arrive.diff(depart))).asMinutes();
  }

  ngOnInit() { }

}
