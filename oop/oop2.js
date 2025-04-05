const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;


    return this
}

const userOne = new User('Shagun', 12, true)
const userTwo = new User('Nirvan', 10, false)

console.log(userOne);
console.log(userTwo);

