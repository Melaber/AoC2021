const args = process.argv.slice(2)
const inputFileName = args[0]



//console.log(args[0])
//const fs = require('fs')

/*const inputFile = fs.readFile(inputFileName, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  return data;
})
*/
const fs = require('fs');
const array = fs.readFileSync(inputFileName).toString().split("\n");
let x = 0;
let y = 0;
let aim = 0;
for(i in array) {
    let direction = array[i].split(' ')[0];
    let amount = parseInt(array[i].split(' ')[1], 10);
    //console.log(array[i-1]);
    console.log("\n", direction ," ", amount);
    if (direction === "forward") {
        x+= amount;
	y = y + (aim * amount);
//console.log(direction + " " + amount + "\n");
    } else if (direction === "down") {
        aim+= amount;
    } else if (direction === "up") {
        aim-= amount;
    } 


    console.log("line: ", i); 
    }
//console.log("Total that are less = " + total_less);
//console.log("Total that are more = " + total_more);
    console.log(` x is ,  ${x}`);
    console.log(` y is ,  ${y}`);
    console.log(` y is ,  ${y}`);
    const total = x * y;	
    console.log(` total is ,  ${total} `);


