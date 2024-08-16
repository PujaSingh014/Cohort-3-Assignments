// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

function cleanFile(){
    return new Promise((resolve) => {
        fs.readFile("a.txt", "utf-8", (err, data)=>{
            newdata = data.replace(/\s+/g, ' ').trim();
            fs.writeFile("a.txt", newdata, "utf-8", (err) =>{
                if(err) console.log(err);
                resolve();
            });
        })
    });
}

cleanFile().then(()=>{
    console.log("Done");
});
