export const dayInput = document.querySelector("#day");
export const monthInput = document.querySelector("#month");
export const yearInput = document.querySelector("#year");
export const maxDayPerMonth = {
    1: 31 ,
    2: 28 , // 29 on leap years
    3: 31 ,
    4: 30 ,
    5: 31 ,
    6: 30 ,
    7: 31 ,
    8: 31 ,
    9: 30 ,
    10: 31 ,
    11: 30 ,
    12: 31 ,
};
export const calculateAgeBtn = document.querySelector("#calculate-button");
export const yearsAgeSpan = document.querySelector("#result-years");
export const monthsAgeSpan = document.querySelector("#result-months");
export const daysAgeSpan = document.querySelector("#result-days");