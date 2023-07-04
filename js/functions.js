import UI from "./classes/UI.js"
import { maxDayPerMonth, dayInput, monthInput, yearInput } from "./selectors.js";

const ui = new UI();
const actualDate = new Date();

let isValidDate = false;

const isLeapYear = year => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

export function validateInput(input) {
    ui.removeInputAlert(input);

    let inputLength = input.value.length;
    let inputValue = input.value;

    if(isNaN(input.value[inputLength - 1]) || input.value[inputLength - 1] === ' ') {
        inputValue = inputValue.slice(0, inputLength - 1);
        input.value = inputValue;
        inputLength = input.value.length;
    }

    if(inputLength === 0) ui.putInputAlert(input, `The ${input.id} cannot be empty.`);

    validateDay(dayInput);
    validateMonth(monthInput)
    validateYear(yearInput)

    isValidDate = validateDay(dayInput) && validateMonth(monthInput) && validateYear(yearInput);
}

function validateDay(input) {
    if(input.value.length === 0) return false;

    ui.removeInputAlert(input);
    const value = parseInt(input.value);
    const month = document.querySelector("#month").value;

    if(value > 31) {
        ui.putInputAlert(input, "Must be a valid day.");
        return false;
    }
    else if(validateDayAndMonth(value, month)){
        ui.putInputAlert(input, "Doesn't match day/month.");
        return false;
    }

    return true;
}

function validateMonth(input) {
    if(input.value.length === 0) return false;

    ui.removeInputAlert(input);
    const value = parseInt(input.value);
    const day = document.querySelector("#day").value;

    if(value > 12) {
        ui.putInputAlert(input, "Must be a valid month.");
        return false;
    }
    else if(validateDayAndMonth(day, value)){
        ui.putInputAlert(input, "Doesn't match day/month.");
        return false;
    }

    return true;
}

function validateYear(input) {
    if(input.value.length === 0) return false;

    ui.removeInputAlert(input);

    const value = parseInt(input.value);

    if(value > new Date().getFullYear() || value < 1800){
        ui.putInputAlert(input, "Must be a valid year.");
        return false;
    }

    return true;
}

function validateDayAndMonth(day, month) {
    return month.length > 0 && day > maxDayPerMonth[parseInt(month)];
}

export function calculateAge() {
    const inputsDate = new Date(`${yearInput.value}-${monthInput.value}-${dayInput.value}`);

    const inputDayValue = inputsDate.getDate();
    const inputMonthValue = inputsDate.getMonth() + 1;
    const inputYearValue = inputsDate.getFullYear();

    isValidDate = isValidDate && actualDate > inputsDate;

    if(isValidDate) {
        let days;
        let months;
        let years;

        days = maxDayPerMonth[inputMonthValue] - inputDayValue + actualDate.getDate();
        months = actualDate.getMonth() + 1 - inputMonthValue;
        years = actualDate.getFullYear() - inputYearValue;
        
        if(actualDate.getMonth() + 1 <= inputMonthValue) {
            months = inputMonthValue - actualDate.getMonth() + 1;
            years = actualDate.getFullYear() - inputYearValue - 1;
            days = days > maxDayPerMonth[inputMonthValue]
                ? days - maxDayPerMonth[inputMonthValue]
                : days;
        }

        ui.createAge(years, months, days);
    } else {
        alert("Please, introduce a valid date.\nThe date must be on the past.");
        ui.resetForm();
    }
}
