
// Method 1 (Promise) - pending, resolve, reject
/* Suppose, There is a url I want to load, I will create a 
promise to find where will be resolve and reject and teh function will create accordingly.*/

const promiseFunction = new Promise ((resolve, reject) =>{
    var promiseName = "jhon";
    if(promiseName === 'pedro'){
        resolve('the name is Pedro'); 
    }
    else{
        reject('This is reject');
    }
});

promiseFunction
.then((promiseName) => 
    console.log(promiseName)
)
.catch((error) => console
.log(error))
.finally(() => 
    console.log('PROMISE FINISH'));

// Method 2 - pending, resolve, reject
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;
    if(completedPromise){
        resolve('The promise was completed');
    }
        else{
            reject('The promise was not completed');
        }
});
    promise1.then((res) =>
                console.log(res)
            )
            .catch((error) =>
                console.log(error)
            ); //single promise

const promise2 = new Promise((resolve, reject) => {
    resolve('The promise2 was completed');

});
    promise2.then((res) =>
                console.log(res)
            )
            .catch((error) =>
                console.log(error)
            ); //single promise

Promise.all([promise1, promise2]).then(([res1, res2]) => { //we can use a single promise to get the result of multiple promises
            console.log(res1, res2);
        }).catch((error) => {
            console.log(error);
        }
    );//Showing multiple promises


//Method 3 Promise (race())
/* Suppose I have multiple promises. 
race() function will show output of the promise which will resolve first.Example is below*/

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('The promise3 was completed');
    }, 3000);
});
const promise4 = new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve('The promise4 was completed');
    }, 2000);
}
);
Promise.race([promise3, promise4]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});


//Method 4 Promise (race())
const taskOne =()=>{
    return new Promise((resolve, reject) => {
        resolve('Task 1 is completed');
    });
}
const taskTwo =()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Task 2 is completed');
        }, 2000); // here when we call taskTwo, it will wait for 2 seconds to show the result then execute the next task
    });
}
const taskThree =()=>{
    return new Promise((resolve, reject) => {
        resolve('Task 3 is completed');
    });
}
const taskFour =()=>{
    return new Promise((resolve, reject) => {
        resolve('Task 4 is completed');
    });
}

// taskOne()
//     .then((res) => {console.log(res)})
//     .then(taskTwo)
//     .then((res) => {console.log(res)})
//     .then(taskThree)
//     .then((res) => {console.log(res)})  
//     .then(taskFour).then((res) => {console.log(res)});

//Method 5 Async/Await

async function awaitFunction(){
    const t1= await taskOne();
    console.log(t1);
    const t2= await taskTwo();
    console.log(t2);
}
awaitFunction();