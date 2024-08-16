// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2
 

//Has Callback Hell
// setTimeout(function(){
//     console.log("hi");
//     setTimeout(() =>{
//         console.log("hello");
//         setTimeout(()=>{
//             console.log("hello there");
//         }, 5000);
//     }, 3000);
// }, 1000);

//Doesn't really have callback hell
// function step3Done() {
//     console.log("hello there");
//   }
  
//   function step2Done() {
//     console.log("hello");
//     setTimeout(step3Done, 5000);
//   }
  
//   function step1Done() {
//     console.log("hi");
//     setTimeout(step2Done, 3000);
//   }
  
//   setTimeout(step1Done, 1000);


//Promisified Solution for above
// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }

  //Has callback hell just using then calls instead
//   setTimeoutPromisified(1000).then(function () {
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function () {
//       console.log("hello");
//       setTimeoutPromisified(5000).then(function () {
//         console.log("hello there");
//       });
//     });
//   });

  //Optimal way without callback hell
//   setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });


  //Promisified version of fs.readfile
  let fs = require("fs");

  function read(resolve){
     fs.readFile("a.txt", "utf-8", (err, data) => {
        resolve(data);
     });
  }
  let p = new Promise(read);

  p.then((data)=>{
    console.log(data);
  });

//   Other way to write
  let p = new Promise((resolve) => {
        fs.readFile("a.txt", "utf-8", (err, data) => {
            resolve(data);
        });
  });

  p.then((data) => {
    console.log(data);
  });

  //Promisified Version of writefile and then read that updated file
//   let writeThisData = "Hello there from JS";
//   let p2 = new Promise((resolve) => {
//     fs.writeFile("a.txt", writeThisData, "utf-8", (err) => {
//         if(!err){
//             resolve();
//         }
//     });
//   })

// p2
// .then(()=>{
//     console.log("Written in the file");
//     return new Promise((resolve) => {
//         fs.readFile("a.txt", "utf-8", (err, data) => {
//             resolve(data);
//         });
//     });
// })
// .then((data) => {
//     console.log(data);
//   });


//Promisified Version of Clean File




  