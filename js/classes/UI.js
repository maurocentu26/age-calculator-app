import { yearsAgeSpan, monthsAgeSpan, daysAgeSpan } from "../selectors.js";
import { dayInput, monthInput, yearInput } from "../selectors.js";

class UI{
    putInputAlert(input, mensaje) {
        this.removeInputAlert(input);

        const alert = document.createElement("SPAN");
        alert.className = "input__alert";
        alert.textContent = mensaje;

        input.parentElement.classList.add("alert");
        input.parentElement.appendChild(alert);
    }

    removeInputAlert(input) {
        if(input.parentElement.classList.contains("alert")) {
            input.parentElement.classList.remove("alert");
            input.parentElement.querySelector(".input__alert").remove();
        }
    }

    createAge(years, months, days) {
        yearsAgeSpan.textContent = years;
        monthsAgeSpan.textContent = months;
        daysAgeSpan.textContent = days;
    }

    resetForm() {
        yearsAgeSpan.textContent = "--";
        monthsAgeSpan.textContent = "--";
        daysAgeSpan.textContent = "--";

        this.removeInputAlert(dayInput);
        this.removeInputAlert(monthInput);
        this.removeInputAlert(yearInput);

        dayInput.value = "";
        monthInput.value = "";
        yearInput.value = "";
    }
}

export default UI;