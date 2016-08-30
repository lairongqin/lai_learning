function A(){
    this.A = 'a';
}

function B() {
    this.B = 'b';
}

var a = new A;

console.log(a instanceof A); // true  因为A的prototype的construct指向与 a一致

A.prototype = B.prototype;

var b = new A;
console.log(a instanceof A); // false 因为A的prototype的construct指向与 a 不一致

console.log(b instanceof A); // true 因为A的prototype的construct指向B ，而 b的prototype的construct也指向B
console.log(b instanceof B); // true

A.prototype = new B;
var c = new A;
console.log(c);
console.log(c instanceof A)
console.log(c instanceof B)
console.log(c instanceof Object)
console.dir(A)
console.dir(B)