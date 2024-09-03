var mod = require('./Coordinates');

var obj1 = new mod.Point(11,20); 
console.log('First Point: ' + `${obj1.print()}`);

var obj2 = new mod.Point(10,20);
console.log('Second Point: ' + `${obj2.print()}`);


var firstX = obj1.GetX();
var firstY = obj1.GetY();

var seconsX = obj2.GetX();
var secondY = obj2.GetY();

mod.Test(firstX, firstY, seconsX, secondY);
