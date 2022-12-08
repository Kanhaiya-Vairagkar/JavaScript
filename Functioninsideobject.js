const obj = {
    name: 'Kanha',
    game: function (){
        // return 'Mahesh';
        console.log(" Mahesh ");
    },
    Substraction: function () {
        var a = 90;
        var b = 89;
        var c = a - b;
        console.log("Substraction " + c);
    }
}
obj.game();
obj.Substraction();


function add() {
    var a = 90;
    var b = 90;
    var c = a + b;
    console.log("Additiom : " + c)
}
add();


var a = {
    Roll_No: 45,
    add: function () {
        var a = 90;
        var b = 910;
        var c = a + b;
        console.log("Addition : " + c);
    },
   multiplication:function() {
    var a = 90;
    var b = 910;
    var c = a * b;
    console.log("Multiplication : " + c);
   }
}
a.add();
a.multiplication();