var languages= ["Telugu", "Tamil", "Kannada", "Malayalam"];
//delete languages[0];

console.log(languages.length,languages[0]);         
// Changes the first element in fruits to undefined, Using delete may leave undefined holes in the array.

//The splice() method can be used to add new items to an array:

//languages.splice(2, 0, "Marathi", "Oriya");

console.log("value 0 second argument",languages)
//The splice() method returns an array with the deleted items:


languages.splice(2, 2, "Marathi", "Oriya");

console.log("value 2 as  second argument",languages)

// Removes the first element of languages
//languages.splice(0, 1);

console.log("Removes the first element of languages",languages);


/*The slice() method creates a new array. It does not remove any elements from the original array.Then the slice() method is given two arguments,
    it selects array elements from the start argument, and up to (but not included) the end argument:*/

var res = languages.slice(2)
console.log("slicing 2 elements from second index",res,languages);


var girls = ["Cecilie", "Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var myChildren = girls.concat(boys);   // Concatenates (joins)


console.log("concatenating two arrays",myChildren)

var strAr = [1,3,4,12,23,2];

console.log("Sorting string", strAr.sort());

var points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return a - b});

console.log("Sorting array asc ", points)

points.sort(function(a, b){return b - a});  // descending

console.log("Sorting array desc ", points)

points.sort(function(a, b){return 0.5 - Math.random()});  // sorting array into random order

console.log("Max element in array",Math.max.apply(null, points));

console.log("Min element in array",Math.min.apply(null, points));


var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];

cars.sort(function(a, b){return a.year - b.year});

console.log("cars ascending by ",cars);

cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});  // comparing string properties

var numbers1 = [45, 4, 9, 16, 25];

function myFunction(value, index, array) {
    return value*2
}
var numbers2 = numbers1.map(function (value) {
    return value * 2;
}
);

console.log(numbers2);

function myFunction(value) {
    return value * 2;
}


var number2 = numbers1.filter(function(value) {

    return value >18;
})

console.log(number2);

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

var first = numbers.findIndex(myFunction); // finds the index of the first element that is larger than 18:



function myFunction(value, index, array) {
    return value > 18;
}
// finds (returns the value of ) the first element that is larger than 18:


var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
// The every() method check if all array values pass a test.


var sum = numbers1.reduce(myFunction,50);

function myFunction(total, value) {
    return total + value;
}

console.log(sum);