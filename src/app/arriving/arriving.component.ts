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
    'description': 'in the parking lot at the circle',
    'arriving': [{
      'line': '207',
      'leaves': '6:52 am',
      'arrives': '07:02 am'
    },
    {
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
    ],
    'departing': [{
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
    'description': 'at the crosswalk between buildings 1400A & 1400B',
    'arriving': [{
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
    }
    ],
    'departing': [{
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
    'description': 'stop at the 2nd crosswalk in front of building 1700',
    'arriving': [{
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
    ],
    'departing': [{
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
    'description': 'stop at the circle between building 1900 & 2000',
    'arriving': [{
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
    ],
    'departing': [{
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
