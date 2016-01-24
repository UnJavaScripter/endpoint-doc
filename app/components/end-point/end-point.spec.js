System.register(['angular2/testing', './end-point'], function(exports_1) {
    var testing_1, end_point_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (end_point_1_1) {
                end_point_1 = end_point_1_1;
            }],
        execute: function() {
            testing_1.describe('EndPoint Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(end_point_1.EndPoint).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/end-point/end-point.spec.js.map