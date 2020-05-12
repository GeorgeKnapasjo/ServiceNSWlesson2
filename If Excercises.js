/*Write a console app that takes 2 numbers entered by the user and prints the larger number to the console
Write a console app that takes 2 numbers entered by the user and prints them to the console in order from 
largest to smallest
Same as 2 but from smallest to largest.*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
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
    let userInput1 = await askQuestion("Enter the first number: ");
    let number1 = parseInt(userInput1);
    let userInput2 = await askQuestion("Enter the second number: ");
    let number2 = parseInt(userInput2);
  // if(number1 > number2){
  //     console.log(number1)
   //}else{ console.log(number2)

   

 //  let userInput1 = await askQuestion("Enter the first number: ");
 //  let number1 = parseInt(userInput1);
   //let userInput2 = await askQuestion("Enter the second number: ");
   //let number2 = parseInt(userInput2);
 // if(number1 > number2){
 //     console.log(number1, number2)
//  }else{ console.log(number2, number1)

 // }
 
  if(number1 > number2){
    console.log(number2, number1)
}else{ console.log(number1, number2)

}

}


Program().then(() => {
    process.exit(0);
});
    
