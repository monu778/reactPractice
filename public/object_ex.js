/*var obj = {};
obj.name = "sravan";
obj.age= "dfgg";


obj.f1 = function() {

    console.log("Calling form object");
}

var person = {fname:"John", lname:"Doe", age:25,f2:function() {console.log("Function F2") }};

var txt = '';
for (var x in person) {
    txt += person[x];
}


var country_langs={
    IN:"HINDI",
    SR:"SIMHALAM",
    NEPAL:"NEPAL",
    PAKISTAN:"URDU",
    BAGLADESH:"BENGALI"
}


for(var y in country_langs) {
    console.log(country_langs[y])
}
delete person.age;   // or delete person["age"];
*/

/*this refers to the "owner" of the function.

The value of this, when used in an object, is the object itself.

In a constructor function this does not have a value. It is a substitute for the new object.
The value of this will become the new object when a new object is created.

In other words, this.firstName means the firstName property of this object. */


/*
var person = {
    firstName: "John",
    lastName : "Doe",
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.noOfHands = 2;
    this.f1=function() {
        console.log(this.eye);
    }
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");


console.log(myFather.firstName)

Person.prototype.noOfEyes = 3;



function Employee(empNo,sal,first, last, age, eye) {

    Person.call(this,first, last, age, eye);

    this.empNo=empNo;
    this.sal=sal;
    this.designation="";

    this.findDesignation = function () {

        if(this.sal>=10000) {

            this.designation= "manager";
        } else if(this.sal>5000 && this.sal>1000) {
            this.designation= "supervisor";
        } else {
            this.designation = "labour";
        }
    }

}


Employee.prototype = Object.create(Person.prototype);

var emp = new Employee(123,1000,'john','das',34,'fdf');

console.log(emp.empNo);
console.log(emp.firstName);
console.log(emp.designation);
emp.findDesignation();
console.log(emp.designation);



// call and apply methods


function add() {
    console.log(arguments.length)
    console.log(arguments[0]+arguments[1]);
}

add.call(myMother,1);

add.apply(myFather,[1]);










// discuss about prototype
