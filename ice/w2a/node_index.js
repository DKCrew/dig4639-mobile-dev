console.log("Hello WOrld");
//var x =1;
var y =[1];
console.log("Test");
function scopeDemo(y1) {
    console.log(x)
    let a = 3, b = 4, c = 5;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(y1);
    y1[0] =500;
    var x = 2;
    if(true) {
        var x = 2;
    }
    return a;
}
console.log(scopeDemo(y)+10);
console.log(y);
