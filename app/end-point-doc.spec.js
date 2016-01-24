System.register(['angular2/testing', '../app/end-point-doc'], function(exports_1) {
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
            testing_1.beforeEachProviders(function () { return [end_point_doc_1.EndPointDocApp]; });
            testing_1.describe('App: EndPointDoc', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([end_point_doc_1.EndPointDocApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([end_point_doc_1.EndPointDocApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/end-point-doc.spec.js.map