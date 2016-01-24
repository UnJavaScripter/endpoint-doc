System.register(['angular2/core', '../end-point/end-point', '../data-service/data-service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, end_point_1, data_service_1;
    var EndPointDoc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (end_point_1_1) {
                end_point_1 = end_point_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            EndPointDoc = (function () {
                function EndPointDoc(_dataService_) {
                    var _this = this;
                    // Consuming the observable
                    _dataService_
                        .getData()
                        .subscribe(function (data) { return _this.endpointsArr = data; }, function (err) { return console.log(err); }, function () { return console.log('Completed!'); });
                }
                EndPointDoc = __decorate([
                    core_1.Component({
                        selector: 'end-point-doc',
                        templateUrl: 'app/components/end-point-doc/end-point-doc.html',
                        styleUrls: ['app/components/end-point-doc/end-point-doc.css'],
                        providers: [data_service_1.DataService],
                        directives: [end_point_1.EndPoint],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], EndPointDoc);
                return EndPointDoc;
            })();
            exports_1("EndPointDoc", EndPointDoc);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/end-point-doc/end-point-doc.js.map