var mod = require('./Fraction');

var obj1 = new mod.Fraction(5, 10);
var obj2 = new mod.Fraction(7, 15);

var num1 = obj1.GetNum();
var dem1 = obj1.GetDem();

var num2 = obj2.GetNum();
var dem2 = obj2.GetDem();

mod.Sum(num1, dem1, num2, dem2);
mod.Subtr(num1, dem1, num2, dem2);
mod.Mult(num1, dem1, num2, dem2);
mod.Div(num1, dem1, num2, dem2);


