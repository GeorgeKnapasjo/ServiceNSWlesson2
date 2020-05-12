const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){

    //QUESTION 1
    //for (let i = 0; i < 8; i += 1)
    //console.log(i)

//QUESTION 2
//for (let i = 1; i < 10; i++) 
//if(i%2==0){
//    console.log(i)
//} 


 // for (let i = 2; i < 9; i += 2)
 //console.log(i)

//QUESTION 3
 //let names = ["james","george","jeff"];
 //let i = 2;
 //while(names[i]) {
 //    console.log(names[i])
 //i--; }
 
 //QUESTION4

 let names = ["bill", "adam", "jeff", "aaron", "michael"]
 
 for(let i = 0; i < names.length; i++)
 {if(names[i].charAt(0) != 'a'){continue}
 {
 console.log(names[i])
 } 
 
}
 

}


Program().then(() => {
    process.exit(0);
});