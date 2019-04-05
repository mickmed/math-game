let play = () => {
    //make random numbers
    let randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let firstStoredNumber = randomNum(1, 100);
    let secondStoredNumber = randomNum(1, 100);
    let answerStored = parseInt(firstStoredNumber) + parseInt(secondStoredNumber);

    //create wrapper div
    let eqWrapper = document.querySelector('.eq-wrapper');
    let eqWrapperLength = eqWrapper.children.length;


    let buildEquationDivs = (eqWrapper, eqWrapperLength) => {
        let equation = document.createElement('div');
        equation.classList.add('equation');
        document.querySelector('.eq-wrapper').appendChild(equation);

        //build equation divs
        let divObj = {};
        let divClass = [
            "firstDivNumber",
            "operand",
            "secondDivNumber",
            "equalsSign",
            "answer"
        ];
        let divText = [firstStoredNumber, "+", secondStoredNumber, "=", answerStored];

        for (i = 0; i < divClass.length; i++) {
            divObj[divClass[i]] = document.createElement("div");
            divObj[divClass[i]].classList.add(divClass[i]);

            for (j = 0; j < divText.length; j++) {
                if (i === j) {
                    document
                        .querySelectorAll(".equation")[eqWrapperLength]
                        .appendChild(divObj[divClass[i]]).innerText = divText[j];
                }
            }
        }
        let answerBtn = document.createElement("button");
        answerBtn.classList.add("answerBtn");
        document.querySelectorAll(".equation")[eqWrapperLength].appendChild(answerBtn).innerText = "check";
        return divObj;
    }
    let divObj = buildEquationDivs(eqWrapper, eqWrapperLength);


    // let buildEqArray = () => {
    //     let eqDivArray = [];
    //     eqDivArray.push(divObj.firstDivNumber, divObj.secondDivNumber, divObj.answer);
    //     return eqDivArray;
    // }
    let eqDivArray = [];
    eqDivArray.push(divObj.firstDivNumber, divObj.secondDivNumber, divObj.answer);

    let replaceWithInputBox = (randomIndex, array) => {
        array[randomIndex].innerText = "";
        array[randomIndex].innerHTML = "<input type='text' class='user-input'>";
        return array;
    }

    let removeIndexFromDivArray = (randomIndex, array) => {
        let removedValue = array[randomIndex].innerText;
        replaceWithInputBox(randomIndex, array);
        return removedValue;
    }
    let randomIndex = Math.floor(Math.random() * eqDivArray.length)
    let removedValue = removeIndexFromDivArray(randomIndex, eqDivArray);


    let checkWin = (removedValue, eqWrapperLength) => {
        //match user input with stored value
        document.querySelectorAll(".answerBtn")[eqWrapperLength].addEventListener("click", function() {

            let userInput = document.querySelectorAll(".user-input")[eqWrapperLength].value;
            let check = document.createElement('div');
            check.classList.add('check');
       



            if (parseInt(userInput) === parseInt(removedValue)) {

                document.querySelectorAll(".equation")[eqWrapperLength].appendChild(check).innerHTML = '<i class="far fa-check-square"></i>';
                
            } else {
                document.querySelectorAll(".equation")[eqWrapperLength].appendChild(check).innerHTML = '<i class="fas fa-skull-crossbones"></i>';
            }
            //turn off buttons after click
            document.querySelectorAll(".answerBtn")[eqWrapperLength].style.pointerEvents = "none";

            //make totals after five equations
            if (eqWrapperLength === 4) {
                let line = document.createElement('div');
                line.classList.add('line');
                document.querySelectorAll(".equation")[eqWrapperLength].parentNode.appendChild(line).innerHTML = '<hr>';

                let bonusMsg = document.createElement('div');
                bonusMsg.classList.add('bonus-msg');
                document.querySelectorAll(".equation")[eqWrapperLength].parentNode.appendChild(bonusMsg).innerHTML = 'Add Totals for Bonus';
                let totalsDiv = buildEquationDivs(eqWrapper, eqWrapperLength + 1);
                let totalsDivArray = [totalsDiv.firstDivNumber, totalsDiv.secondDivNumber, totalsDiv.answer];
                for (i = 0; i < totalsDivArray.length; i++) {
                    replaceWithInputBox(i, totalsDivArray);
                }

                //hide first two totals - use for advance level
                let totChildren = eqWrapper.lastChild.children;
                for(i=0;i<totChildren.length-2;i++){
                    totChildren[i].style.visibility = "hidden";
                }
                
                // eqWrapper.lastChild.children[0].style.visibility="hidden";

                let totalScores = document.querySelectorAll(".answer");
                let total = 0;
                for (i = 0; i < totalScores.length; i++) {
                    if (totalScores[i].children.length > 0) {
                        // console.log(totalScores[i].children[i].value);
                        total += parseInt(totalScores[i].children[0].value);
                    }
                    total += parseInt(totalScores[i].innerText);
                }
                //end play
                return false;
            }

            play();
        });
    }
    checkWin(removedValue, eqWrapperLength);
}

play();