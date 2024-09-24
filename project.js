// 1. deposit some mone
// 2. determine number of lines to bet on
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user winnings 
// 7. play again 

// function deposit(){
//     return 1
// }

const prompt = require("prompt-sync")();

const deposit = () => {
    while (true){
    const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);
        if (isNaN(numberDepositAmount)|| numberDepositAmount <= 0 ){
            console.log ('invalid deposit amount, try again.')
        }
        else{
            return numberDepositAmount;
        }

}
}

const getNumberOfLines = () =>{
    
}

const depositAmount = deposit();
console.log(depositAmount);