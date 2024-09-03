function Point(x, y)
{
    this.x = x;
    this.y = y;
    this.print = ()=>{
        return 'x = '+ this.x + ' y = ' + this.y;
    }

    this.GetX = ()=>{
        return this.x;
    }

    this.GetY = ()=>{
        return this.y;
    }
}

function Test(firstX, firstY, seconsX, secondY){
    if(firstX === seconsX){
        console.log('Прямая параллельна оси ординат');
    }
    else if(firstY === secondY){
        console.log('Прямая параллельна оси абсцисс');
    }
    else{
        console.log('Прямая не параллельна ни одной из осей');
    }
}

module.exports = {
    Point: Point,
    Test: Test  
}
