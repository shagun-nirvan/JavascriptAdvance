class User {
    constructor(email, password){
        this.email = email
        this.password = password // this gives context to the variable
    }

    get password(){
        return this._password.toUpperCase() // _ here refers to defining a private property
    }

    set password(value){
        this._password = value //create problem as constructor and setter both are setting the password
    }
}

const shagun = new User("jhdksj@mail.com", "123xyz")
console.log(shagun.password);
