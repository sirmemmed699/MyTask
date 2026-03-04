
// 25 %

const totalAmount = 3900;

const creditOfCount = 5;

const creditOfAmount = parseFloat((totalAmount / 60)*creditOfCount)/4;

console.log(creditOfAmount);


// write same code as a function

function calculiatedCreditOfAmount(totalAmount, creditOfCount){
    return((totalAmount / 60)* creditOfCount)/4;
}

const creditOfAmount2 = calculiatedCreditOfAmount(totalAmount, creditOfCount);
console.log(creditOfAmount2)