//Prototype is a kind of inheritence in js

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "web",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.shagun = function(){
    console.log(`Shagun is present in all objects`);
    
}

Array.prototype.heyShagun = function(){
    console.log(`hey Shagun`);
    
}

// heroPower.shagun()
// myHeroes.shagun()
// myHeroes.heyShagun()
// heroPower.heyShagun()    //Objects ko access de diya to down the line sabko access mil jaata hai arrays and all but if we gave access through arrays then it won't give access to Objects as they are larger datatypes



const User = {
    name: "sha",
    email: '123@xyz.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User

//MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Shagun Nirvan  "
String.prototype.trueLength = function(){
    console.log(`${this}`);  //this mei jiska reference diya jaa rahaa hai vo uska hi solution dega
    console.log(`${this.name}`);  //this keyword tells us about current execution context 
    console.log(`true lenght: ${this.trim().length}`);
    
}

anotherUsername.trueLength()