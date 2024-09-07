const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > new Date().getFullYear()) {
        resultParagraph.textContent = "Invalid input. Please enter valid numbers for day, month, and year.";
        return;
    }

    const dob = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();

    // Handle leap year edge cases
    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
        age--;
        if (month === 2 && today.getDate() === 29 && !isLeapYear(today.getFullYear())) {
            months = 11; // Adjust for February 29th in non-leap years
        }
    }

    resultParagraph.textContent = `Your age is ${age} years old.`;
});

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}