import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/Rx';

@Injectable()
export class GetData {


    constructor(private _http: Http) {

    }


    getObjectData() {

        return this._http.get('/assets/data/data.json')
            .map(data => console.log('Test: ', JSON.stringify(data.json())));

    }

}