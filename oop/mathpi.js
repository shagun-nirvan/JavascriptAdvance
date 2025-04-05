// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")


const sha = {
    name: 'Nir Van',
    price: 250,
    isAvailable: true,

    orderchai : function(){
        console.log("nothing to say");
        
    }
}

console.log(Object.getOwnPropertyDescriptor(sha, "name"));

Object.defineProperty(sha, "name", {
    writable:false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(sha, "name"));

for (let [key,value] of Object.entries(sha)) {
    if (typeof value !=='function') {
        console.log(`${key} : ${value}`);
    }
    
    
}