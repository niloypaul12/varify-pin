function noValue(id){
    document.getElementById(id).value = '';

}


function noText(id){
    document.getElementById(id).innerText = '';

}


// Display none
function displayNone(id){
    document.getElementById(id).style.display = "none";

}


// display block

function diplayBlock(id){
    document.getElementById(id).style.display = "block";
}
// 2nd step- random pin generation

function randomPin(id){
    var randomNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("inputPin").value = randomNumber;

    // after the click for pin generation the value will be empty in typedPin area
    noValue('typedPin');

    displayNone('pinMatched'); //when next pin generation button is clicked the message of success will go away

    displayNone('unmatched');
    displayNone('tryValue');

}


// 3rd step - input value by user click

function key(id){
    let olderValue = document.getElementById('typedPin').value; // for input we capture value & for button we capture innerText
    let keyText = document.getElementById(id).innerHTML;
    document.getElementById('typedPin').value = olderValue + keyText;
}


// 4th step - backspace & clear typed pin

function clean(){
    document.getElementById('typedPin').value = '';
}

function backSpace() {
    var inputResult = document.getElementById('typedPin').value;
    var backspace = inputResult.slice(0, -1);
    document.getElementById('typedPin').value = backspace;
}

// 5th step - compare both input value on submission

function submitClick() {
    var randomValue = document.getElementById('inputPin').value;
    var typedValue = document.getElementById('typedPin').value;

    // condition for pin matching
    if (randomValue == typedValue) {
        diplayBlock('pinMatched');
        displayNone('unmatched'); //when match make unmatched vanish
        displayNone('tryValue');
        
    }
    else{
        diplayBlock('unmatched');
        displayNone('pinMatched'); //when match make matched vanish
        tryRemained('tryRemain');
        diplayBlock('tryValue');
    }

    
}

// 6th step - try number reduction

function tryRemained(id){
    var tryAgain = document.getElementById(id).innerHTML; // we are capturing the number in span
    document.getElementById(id).innerHTML -=1; //reducing this by 1 every time this function runs
    if (tryAgain == 1) {
        disableBtn('submit'); //disbale the submit button when no try left
        
    }

}

// disableBtn function creation
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed'; //style of cursor in that button will show not-allowed sign
    button.setAttribute('disabled', 'true'); //button gets disabled
    button.title = "reload again";
}