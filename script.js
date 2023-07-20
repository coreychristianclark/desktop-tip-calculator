const form = document.querySelector("form");
const errorMessage = document.querySelector("#error-message");



function formatNumber(value, minimumFractionDigits, maximumFractionDigits) {
  const stringValue = String(value);
  const numericValue = stringValue.replace(/[^\d.]/g, "");
  const formattedValue = Number(numericValue).toLocaleString(undefined, {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits,
  });
  return formattedValue;
}

function validateInput(inputElement, errorMessageText) {
  if (inputElement.value === "" || Number.isNaN(Number(inputElement.value))) {
    console.error(errorMessageText);
    inputElement.classList.add("error");
    errorMessage.innerText = errorMessageText;
    errorMessage.style.display = "block";
    return false;
  }
  inputElement.classList.remove("error");
  errorMessage.style.display = "none";
  return true;
}

function removeError(value) {
  value.addEventListener("focus", () => {
    value.classList.remove("error");
    errorMessage.style.display = "none";
  });
}

const billInput = document.querySelector("#billInput");
const tipPercentageInput = document.querySelector("#tipPercentageInput");
const divideByInput = document.querySelector("#divideByInput");
const grandTotalText = document.querySelector("#grandTotalText");
const billTotalText = document.querySelector("#billTotalText");
const tipTotalText = document.querySelector("#tipTotalText");
const tipEachText = document.querySelector("#tipEachText");
const totalEachText = document.querySelector("#totalEachText");
const fifteen = document.querySelector("#fifteen");
const twenty = document.querySelector("#twenty");
const twentyFive = document.querySelector("#twentyFive");




function validateForm() {
  const billTotal = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const divideBy = parseFloat(divideByInput.value);


  const isBillValid = validateInput(
    billInput,
    "You must enter a valid amount."
  );
  const isTipPercentageValid = validateInput(
    tipPercentageInput,
    "You must enter a valid number."
  );
  const isDivideByValid = validateInput(
    divideByInput,
    "You must enter 1 or more."
  );

  if (!isBillValid || !isTipPercentageValid || !isDivideByValid) {
    errorMessage.innerText = "Please fill in all fields correctly.";
    errorMessage.style.display = "block";
    return;
  }

      if (isBillValid && isTipPercentageValid && isDivideByValid) {
        validateInput(billInput, "You must enter a valid amount.");
        removeError(billInput);

        validateInput(tipPercentageInput, "You must enter a valid number.");
        removeError(tipPercentageInput);

        validateInput(divideByInput, "You must enter 1 or more.");
        removeError(divideByInput);
      }


  const grandTotalMath = billTotal + tipPercentage * billTotal;
  grandTotalText.innerText = "$" + formatNumber(grandTotalMath, 2, 2);

  billTotalText.innerText = "$" + formatNumber(billTotal, 2, 2);

  const tipTotal = billTotal * tipPercentage;
  tipTotalText.innerText = "$" + formatNumber(tipTotal, 2, 2);

  const tipEach = (billTotal * tipPercentage) / divideBy;
  tipEachText.innerText = "$" + formatNumber(tipEach, 2, 2);

  const totalEach = grandTotalMath / divideBy;
  totalEachText.innerText = "$" + formatNumber(totalEach, 2, 2);

  const fifteenMath = billTotal * 0.15;
  fifteen.innerText = "15%: $" + formatNumber(fifteenMath, 2, 2);

  const twentyMath = billTotal * 0.2;
  twenty.innerText = "20%: $" + formatNumber(twentyMath, 2, 2);

  const twentyFiveMath = billTotal * 0.25;
  twentyFive.innerText = "25%: $" + formatNumber(twentyFiveMath, 2, 2);

  errorMessage.style.display = "none";
}

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
  });





function clear() {
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => {
    billInput.value = "";
    tipPercentageInput.value = "";
    divideByInput.value = "";
    grandTotalText.innerText = "$0";
    billTotalText.innerText = "$0";
    tipTotalText.innerText = "$0";
    tipEachText.innerText = "$0";
    totalEachText.innerText = "$0";
    fifteen.innerText = "$0";
    twenty.innerText = "$0";
    twentyFive.innerText = "$0";
    billInput.classList.remove("error");
    tipPercentageInput.classList.remove("error");
    divideByInput.classList.remove("error");
    errorMessage.innerText = ""
  });
}
clear()