const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('async task is complete');
        resolve();
    }, 1000);
})

promiseOne.then(function(){
    console.log('Promise Consumed');
})


new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log('aync task 2');
        resolve()
    },1000);
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email: "suraj@gmail.com"})

    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    

})