function outer(a) {
    var c = 0;
    return function inner(b) {
        c++;
        return a+b;
    }
}


(function() {
   var c;
    console.log("I my self executed");


    function add() {

         console.log("sadsfds");
    }


})();



