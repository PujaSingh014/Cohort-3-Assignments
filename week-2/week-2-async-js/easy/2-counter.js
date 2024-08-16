// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let t=1;

function incrementCounter(){
    setTimeout(() => {
        console.clear();
        console.log(t);
        t++;
        incrementCounter();
    }, 1000);
}

incrementCounter();






































































// (Hint: setTimeout)