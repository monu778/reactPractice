

console.log("first Statement");

setTimeout(function() {
    console.log("printed only once")
},1000)



console.log("Third statement");

var i=1000;
/*var timerHandle = setInterval(function() {
    i++;
    console.log("execution started",i);

    if(i==1010) {
        clearInterval(timerHandle)
    }

},i);*/

//javascript hoisiting


add1();

function add1() {

    console.log("add function")
}




const add2 = (i,j) => console.log("arro add function "+ i)

add2(2,3);

const add3 = (i,j) => {

    console.log(i+j);
    console.log(3);

}


//... spread operator


let ar1 = [14,15,17,18]
let ar = [3,4,5,6,8,9];

let ar2 = [...ar];  // It will not create any reference of an array





