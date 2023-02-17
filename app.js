function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4) {
        return pin;
    }
    else {
        console.log('pin not found');
        return getPin();
    }
};

function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('generate-btn').addEventListener('click', function() {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function(event) {
    const numberLevel = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const preTypedNumber = typedNumberField.value;

    if(isNaN(numberLevel)) {
        if(numberLevel === 'C') {
            typedNumberField.value = '';
        }
        else if (numberLevel === '<') {
            const digits = preTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = preTypedNumber + numberLevel;
        typedNumberField.value = newTypedNumber;
    }
});


document.getElementById('submit-btn').addEventListener('click', function() {
    const displayPinField = document.getElementById('display-pin');
    const newPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccess = document.getElementById('correct-msg');
    const pinFailer = document.getElementById('incorrect-msg');

    if(typedNumber === newPin) {
        pinSuccess.style.display = 'block';
        pinFailer.style.display = 'none';
    }
    else {
        pinFailer.style.display = 'block';
        pinSuccess.style.display = 'none';
    }
});