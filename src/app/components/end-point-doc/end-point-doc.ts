import {Component} from 'angular2/core';
import {EndPoint} from '../end-point/end-point';
import {DataService} from '../data-service/data-service';


@Component({
  selector: 'end-point-doc',
  templateUrl: 'app/components/end-point-doc/end-point-doc.html',
  styleUrls: ['app/components/end-point-doc/end-point-doc.css'],
  providers: [DataService],
  directives: [EndPoint],
  pipes: []
})
export class EndPointDoc {
    
    public endpointsArr : Array<any>;

    constructor(_dataService_: DataService) {
        // Consuming the observable
        _dataService_
            .getData()
            .subscribe(
                data => this.endpointsArr = data,
                err => console.log(err),
                () => console.log('Completed!')
            )


    }

}
