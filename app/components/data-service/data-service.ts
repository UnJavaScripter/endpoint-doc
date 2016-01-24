import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';


@Injectable()
export class DataService {
    
    constructor(public http:Http){
    }

    getData() {
        //const URL = 'https://raw.githubusercontent.com/UnJavaScripter/endpoint-doc/gh-pages/src/_endpoint_data_.json';
        const URL = '../../../_endpoint_data_.json';
       
        // return an observable
        return this.http.get(URL)
            .map( res => res.json() )


      }



}