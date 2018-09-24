var carlike = function (obj, loc){
    obj.loc = loc;
    obj.move = move;
    return obj;
};

var move = function(){
    console.log(this)
    this.loc++;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({},9);
ben.move();//ben at the left of the dot at call time, this is the obj being g


//sample object maker

var twinMaker = () => {
    return {example: 'property'};

};
var twin1 = twinMaker();
var twin2 = twinMaker()
console.log(twinMaker)

var twinMaker2=()=> {
    return (x) => {
        console.log(x +2)
    }
}

var twin3 = twinMaker2(4)
console.log(twin3)


