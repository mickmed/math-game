
let equationDisplayArray = [];
let equationStoredArray = [];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


///build equation 
let firstDisplayNumber = document.querySelector('.first-number');
let firstStoredNumber = randomNum(1,12);
firstDisplayNumber.innerText = firstStoredNumber;

let operand = document.querySelector('.operand').innerText='+';

let secondDisplayNumber = document.querySelector('.second-number');
let secondStoredNumber = randomNum(1,12);
secondDisplayNumber.innerText = secondStoredNumber;

let equalsSign = document.querySelector('.equalsSign').innerText='=';

let answerStored = parseInt(firstStoredNumber) + parseInt(secondStoredNumber);
let answerDisplay = document.querySelector('.answer');
answerDisplay.innerText = answerStored;


//make equation array
equationDisplayArray.push(firstDisplayNumber, secondDisplayNumber, answerDisplay);
equationStoredArray.push(firstStoredNumber, secondStoredNumber, answerStored);
// console.log(equationDisplayArray);

//remove random element from equation array
let randomIndex = Math.floor(Math.random() * (equationDisplayArray.length));

let removalIndex = equationDisplayArray[randomIndex];
let removalStored = equationStoredArray[randomIndex];
let removalClass = removalIndex.className;

document.querySelector('.'+removalClass).innerText = "";
document.querySelector('.'+removalClass).innerHTML = "<input type='text' class='user-input'>"


document.querySelector('.answerBtn').addEventListener('click', function(){
    let userInput = document.querySelector('.user-input').value;
    ;
 
    if(userInput === removalStored){
        console.log(equationStoredArray[randomIndex]);
        console.log(document.querySelector('.user-input').value);
       

    }
   

    
})