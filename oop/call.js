function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)  //.call hold the reference of the function
                                        // call current execution context kisi aur function ko pass kardeta hai

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "bal@xyz.com", "abc123pqr")
console.log(chai);
