"use strict";
function _findNumOfDigits(arg) {
    let str = String(arg);
    let matches = str.match(/\d/g);
    return matches ? matches.length : 0;
}


function _surplus(str) {
    return function() {
        return str;
    };
}


function _strNumbers(array) {
    return array.filter(item => /\d/.test(item));
}


function _determineClassGrading(grades) {
    let passCount = 0;
    let failCount = 0;
    let total = 0;


    grades.forEach(grade => {
        total += grade;
        if (grade >= 50) {
            passCount++;
        } else {
            failCount++;
        }
    });


    let average = grades.length ? Math.round((total / grades.length) * 10) / 10 : 0;


    console.log("Passing grades: " + passCount);
    console.log("Failing grades: " + failCount);
    console.log("Average grade: " + average);


    return [passCount, failCount, average];
}


const _moveCapitalLetters = (str) => {
    let capitals = "";
    let lower = "";


    for (let char of str) {
        if (char >= "A" && char <= "Z") {
            capitals += char;
        } else {
            lower += char;
        }
    }


    return capitals + lower;
};

function _checkS(password){

}