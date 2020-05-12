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
    let answer = []
    let userInput1 = await askQuestion("Enter a number between 1 and 3: ");
    let number1 = parseInt(userInput1);
    answer.push(number1)
    let userInput2 = await askQuestion("Enter another number between 1 and 3: ");
    let number2 = parseInt(userInput2);{
    answer.push(number2)
 if (number1==number2){console.log(`duplicate answer found ${number1} and ${number2}`)}}
  let userInput3 = await askQuestion("Enter another number between 1 and 3: ");
    let number3 = parseInt(userInput3);{
    if (number1==number2){console.log(`duplicate answer found ${number1} and ${number2}`)}
    else if(number2==number3){console.log(`duplicate number found ${number2} and ${number3}`)}

    {console.log('congrats you win')}


 }
    
 {}}

Program().then(() => {
    process.exit(0);
});