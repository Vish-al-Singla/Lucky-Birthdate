const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");


function checkBirthdateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum =0;
    for (let i = 0; i<dob.length;i++) {
        sum = sum + Number(dob.charAt(i));
    }
}



checkNumberButton.addEventListener('click', checkBirthdateIsLucky);