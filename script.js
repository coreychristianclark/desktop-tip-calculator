const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const billInput = document.querySelector("#billInput");
  const tipPercentageInput = document.querySelector("#tipPercentageInput");
  const divideByInput = document.querySelector("#divideByInput");
  const grandTotal = document.querySelector("#grandTotal");

  const billTotal = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const divideBy = parseFloat(divideByInput.value);

  const calculation = billTotal * tipPercentage + billTotal / divideBy;
  const formattedTotal = calculation.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  grandTotal.innerText = "$" + formattedTotal;
});

// Must enter a number.console.error
