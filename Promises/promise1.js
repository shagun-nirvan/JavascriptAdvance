const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
        console.log('async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function(){         //then() is directly related to resolve (jab takk resolve nahi karenge tabb takk then nahi execute karega)
    console.log('promise consumed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){

    setTimeout(function(){
        resolve({username:"Shagun", email:"nirvanshagun173@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Shagun", password:"xyz@123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
}) 
PromiseFour.then((user) => {
    console.log(user);
    return user.username  
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log('the promise is either resolved or rejected'))
    
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Shagun", password:"xyz@123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
        
    }catch(error){
        console.log(error);
        
    }
    
}

consumePromiseFive()

async function getAllUsers(){
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = response.json()
    console.log(data);
   } catch (error) {
    console.log("E:",1000);
    
   }
    
}

getAllUsers()


//.then().catch() and try and catch are working same with different syntax