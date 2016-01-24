import {Component} from 'angular2/core';


@Component({
  selector: 'end-point-doc-app',
  providers: [],
  templateUrl: 'app/end-point-doc.html',
  directives: [],
  pipes: []
})
export class EndPointDocApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
