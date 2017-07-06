import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-departing',
  templateUrl: './departing.component.html',
  styleUrls: ['./departing.component.scss']
})

export class DepartingComponent implements OnInit {
  stops = [{
    'name': '1200-1300 Seaport Blvd',
    'description': 'parking lot at the circle',
    'departing': [
      {
        'line': '258',
        'leaves': '3:52 pm',
        'arrives': '4:10 pm'
      },
      {
        'line': '366',
        'leaves': '4:24 pm',
        'arrives': '4:42 pm'
      }, {
        'line': '268',
        'leaves': '4:55 pm',
        'arrives': '5:13 pm'
      }, {
        'line': '376',
        'leaves': '5:26 pm',
        'arrives': '5:44 pm'
      }, {
        'line': '278',
        'leaves': '5:56 pm',
        'arrives': '6:14 pm'
      }, {
        'line': '386',
        'leaves': '6:25 pm',
        'arrives': '6:43 pm'
      }, {
        'line': '288',
        'leaves': '6:53 pm',
        'arrives': '7:10 pm'
      }, {
        'line': '190',
        'leaves': '7:57 pm',
        'arrives': '8:15 pm'
      }
    ]
  }, {
    'name': '1400 Seaport Blvd',
    'description': 'crosswalk between buildings 1400A & 1400B',
    'departing': [
      {
        'line': '258',
        'leaves': '3:54 pm',
        'arrives': '4:10 pm'
      },
      {
        'line': '366',
        'leaves': '4:26 pm',
        'arrives': '4:42 pm'
      }, {
        'line': '268',
        'leaves': '4:57 pm',
        'arrives': '5:13 pm'
      }, {
        'line': '376',
        'leaves': '5:28 pm',
        'arrives': '5:44 pm'
      }, {
        'line': '278',
        'leaves': '5:58 pm',
        'arrives': '6:14 pm'
      }, {
        'line': '386',
        'leaves': '6:27 pm',
        'arrives': '6:43 pm'
      }, {
        'line': '288',
        'leaves': '6:55 pm',
        'arrives': '7:10 pm'
      }, {
        'line': '190',
        'leaves': '7:59 pm',
        'arrives': '8:15 pm'
      }
    ]
  }, {
    'name': '1700 Seaport Blvd',
    'description': '2nd crosswalk in front of building 1700',
    'departing': [
      {
        'line': '258',
        'leaves': '3:56 pm',
        'arrives': '4:10 pm'
      },
      {
        'line': '366',
        'leaves': '4:28 pm',
        'arrives': '4:42 pm'
      }, {
        'line': '268',
        'leaves': '4:59 pm',
        'arrives': '5:13 pm'
      }, {
        'line': '376',
        'leaves': '5:30 pm',
        'arrives': '5:44 pm'
      }, {
        'line': '278',
        'leaves': '6:00 pm',
        'arrives': '6:14 pm'
      }, {
        'line': '386',
        'leaves': '6:29 pm',
        'arrives': '6:43 pm'
      }, {
        'line': '288',
        'leaves': '6:57 pm',
        'arrives': '7:10 pm'
      }, {
        'line': '190',
        'leaves': '8:01 pm',
        'arrives': '8:15 pm'
      }
    ]
  }, {
    'name': '1900-2000 Seaport Blvd',
    'description': 'circle between building 1900 & 2000',
    'departing': [
      {
        'line': '258',
        'leaves': '3:58 pm',
        'arrives': '4:10 pm'
      },
      {
        'line': '366',
        'leaves': '4:30 pm',
        'arrives': '4:42 pm'
      }, {
        'line': '268',
        'leaves': '5:01 pm',
        'arrives': '5:13 pm'
      }, {
        'line': '376',
        'leaves': '5:32 pm',
        'arrives': '5:44 pm'
      }, {
        'line': '278',
        'leaves': '6:02 pm',
        'arrives': '6:14 pm'
      }, {
        'line': '386',
        'leaves': '6:31 pm',
        'arrives': '6:43 pm'
      }, {
        'line': '288',
        'leaves': '6:59 pm',
        'arrives': '7:10 pm'
      }, {
        'line': '190',
        'leaves': '8:03 pm',
        'arrives': '8:15 pm'
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
    if (duration.asMinutes() > 60) {
      const inHours = Math.floor(hours) + ' hours';
      return inHours;
    } else {
      const inMinutes = minutes + ' minutes';
      return inMinutes;
    }
  }
  ngOnInit() { }

}
