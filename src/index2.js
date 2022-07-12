var Son = /** @class */ (function () {
    function Son() {
    }
    Son.prototype.hello = function () {
        console.log("hello");
    };
    return Son;
}());
var s1 = new Son();
console.log(s1.name);
s1.hello();
