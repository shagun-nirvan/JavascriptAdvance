class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //super keyword automatically refer karega parent class k constructor ko aur vha se data access le paayega
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const sha = new Teacher("rom", "mak@acv.com", "23w1")

sha.addCourse()

console.log(sha instanceof User);
