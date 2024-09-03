function Fraction(numerator, denominator)
{
    this.numerator = numerator;
    this.denominator = denominator;

    this.GetNum = () =>
    {
        return this.numerator;
    }

    this.GetDem = () =>
    {
        return this.denominator;
    }
}

function Sum(num1, dem1, num2, dem2){
    var x = num1 + num2;
    var y = dem1 + dem2;
    console.log('Sum: '+ x + ' / ' + y); 
}

function Subtr(num1, dem1, num2, dem2){
    var x = num1 - num2;
    var y = dem1 - dem2;
    console.log('Subtr: '+ x + ' / ' + y); 
}

function Mult(num1, dem1, num2, dem2){
    var x = num1 * num2;
    var y = dem1 * dem2;
    console.log('Mult: '+ x + ' / ' + y); 
}


function Div(num1, dem1, num2, dem2){
    var x = num1 / num2;
    var y = dem1 / dem2;
    console.log('Div: '+ x + ' / ' + y); 
}


module.exports = {
    Fraction: Fraction,
    Sum: Sum,
    Subtr: Subtr,
    Mult: Mult,
    Div: Div
}
