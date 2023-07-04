import { dayInput, monthInput, yearInput, calculateAgeBtn } from "../selectors.js";
import { validateInput, calculateAge } from "../functions.js";

class App{
    constructor() {
        this.initApp();
    }

    initApp() {
        this.eventListeners();
    }

    eventListeners() {
        dayInput.addEventListener("input", () => {
            validateInput(dayInput);
        })
        monthInput.addEventListener("input", () => {
            validateInput(monthInput);
        })
        yearInput.addEventListener("input", () => {
            validateInput(yearInput);
        })
        calculateAgeBtn.addEventListener("click", calculateAge);
    }
}

export default App;