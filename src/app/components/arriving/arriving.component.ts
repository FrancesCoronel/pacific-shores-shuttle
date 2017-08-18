import { Component, OnInit } from '@angular/core';

/**
 * Vendor
 */
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
    'duration': '13',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:05 am'
      }, {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:50 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:30 am'
      }, {
        'line': '329',
        'leaves': '8:46 am',
        'arrives': '8:59 am'
      }, {
        'line': '231',
        'leaves': '9:17 am',
        'arrives': '9:30 am'
      }, {
        'line': '135',
        'leaves': '10:00 am',
        'arrives': '10:13 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:49 am'
      }, {
        'line': '139',
        'leaves': '11:05 am',
        'arrives': '11:18 am'
      }
    ]
  }, {
    'name': '1400 Seaport Blvd',
    'description': 'crosswalk between buildings 1400A & 1400B',
    'duration': '14',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:06 am'
      }, {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:51 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:31 am'
      }, {
        'line': '329',
        'leaves': '8:46 am',
        'arrives': '9:00 am'
      }, {
        'line': '231',
        'leaves': '9:17 am',
        'arrives': '9:31 am'
      }, {
        'line': '135',
        'leaves': '10:00 am',
        'arrives': '10:14 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:50 am'
      }, {
        'line': '139',
        'leaves': '11:05 am',
        'arrives': '11:19 am'
      }
    ]
  }, {
    'name': '1700 Seaport Blvd',
    'description': '2nd crosswalk in front of building 1700',
    'duration': '15',
    'arriving': [
      {
        'line': '207',
        'leaves': '6:52 am',
        'arrives': '07:07 am'
      }, {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:52 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:32 am'
      }, {
        'line': '329',
        'leaves': '8:46 am',
        'arrives': '9:01 am'
      }, {
        'line': '231',
        'leaves': '9:17 am',
        'arrives': '9:32 am'
      }, {
        'line': '135',
        'leaves': '10:00 am',
        'arrives': '10:15 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:51 am'
      }, {
        'line': '139',
        'leaves': '11:05 am',
        'arrives': '11:20 am'
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
        'arrives': '07:09 am'
      }, {
        'line': '319',
        'leaves': '7:37 am',
        'arrives': '7:54 am'
      }, {
        'line': '221',
        'leaves': '8:17 am',
        'arrives': '8:36 am'
      }, {
        'line': '329',
        'leaves': '8:46 am',
        'arrives': '9:03 am'
      }, {
        'line': '231',
        'leaves': '9:17 am',
        'arrives': '9:34 am'
      }, {
        'line': '135',
        'leaves': '10:00 am',
        'arrives': '10:17 am'
      }, {
        'line': '237',
        'leaves': '10:36 am',
        'arrives': '10:53 am'
      }, {
        'line': '139',
        'leaves': '11:05 am',
        'arrives': '11:22 am'
      }
    ]
  }];

  selectedStop = this.stops[0];

  constructor() { }

  ngOnInit() { }

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
}
