System.register(['angular2/testing', '../app/awesomeApp'], function(exports_1) {
    var testing_1, awesomeApp_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (awesomeApp_1_1) {
                awesomeApp_1 = awesomeApp_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [awesomeApp_1.awesomeApp]; });
            testing_1.describe('App: Ng2intro', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([awesomeApp_1.awesomeApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([awesomeApp_1.awesomeApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=../../../app/awesomeApp.spec.js.map