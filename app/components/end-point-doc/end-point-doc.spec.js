System.register(['angular2/testing', './end-point-doc'], function(exports_1) {
    var testing_1, end_point_doc_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (end_point_doc_1_1) {
                end_point_doc_1 = end_point_doc_1_1;
            }],
        execute: function() {
            testing_1.describe('EndPointDoc Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(end_point_doc_1.EndPointDoc).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/end-point-doc/end-point-doc.spec.js.map