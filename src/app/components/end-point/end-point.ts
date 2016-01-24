import {Component} from 'angular2/core';


@Component({
  selector: 'end-point',
  templateUrl: 'app/components/end-point/end-point.html',
  styleUrls: ['app/components/end-point/end-point.css'],
  providers: [],
  directives: [],
  pipes: [],
  properties: ['method', 'params', 'response', 'url']
})
export class EndPoint {

  constructor() {}

}
