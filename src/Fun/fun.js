var foo = "hi";
// The Observer
var Observer = /** @class */ (function () {
    function Observer() {
    }
    ;
    return Observer;
}());
// The Concrete Observer === FUN!!!
var katieObserver = /** @class */ (function () {
    function katieObserver() {
        this.Update = function () {
            console.log("We are in the concrete observer.");
        };
    }
    ;
    return katieObserver;
}());
;
var concreteObserver = new katieObserver();
concreteObserver.Update();
