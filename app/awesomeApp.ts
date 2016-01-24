import {Component} from 'angular2/core';
import {EndPointDoc} from './components/end-point-doc/end-point-doc';



@Component({
  selector: 'awesome-app',
  providers: [],
  templateUrl: 'app/awesomeApp.html',
  directives: [EndPointDoc],
  pipes: []
})
export class awesomeApp {
}
