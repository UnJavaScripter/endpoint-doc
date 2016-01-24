System.register(['angular2/platform/browser', './app/awesomeApp', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
    var browser_1, awesomeApp_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (awesomeApp_1_1) {
                awesomeApp_1 = awesomeApp_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(awesomeApp_1.awesomeApp, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=../../app.js.map