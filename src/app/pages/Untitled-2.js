// let promise1 = new Promise((resolve, reject) => {
//   resolve("resolved promise 1");
// });

// let promiseCount = 2;
// let promise2 = new Promise((resolve, reject) => {
//   if (promiseCount == 1) {
//     promiseCount++;
//     reject("rejected promise 2");
//   } else {
//     resolve("resolved promise 2");
//   }
// });

// let promise3 = new Promise((resolve, reject) => {
//   resolve("resolved promise 3");
// });

// let promise4 = new Promise((resolve, reject) => {
//   resolve("resolved promise 4");
// });

// Promise.all([promise1,promise2,promise3,promise4]).then((x)=>[
//     console.log(x)
// ])

// // promise1
// //   .then((result) => {
// //     console.log(result);
// //     return promise2.catch((error) => {
// //         console.log('error', error)
// //       return promise2;
// //     });
// //   })
// //   .then((result) => {
// //     console.log(result);
// //     return promise3;
// //   })
// //   .then((result) => {
// //     console.log(result);
// //     return promise4;
// //   })
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });


let timer = null

function debounceFn(fn){
    if(timer){
        clearTimeout(timer)
    }

   timer =  setTimeout(()=>{
    fn()
    timer = null
   },5000)
}

function fn(){
    console.log("called")
}

debounceFn(fn)