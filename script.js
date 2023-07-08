const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const billInput = document.querySelector("#billInput");
  const tipPercentageInput = document.querySelector("#tipPercentageInput");
  const divideByInput = document.querySelector("#divideByInput");
  const grandTotalText = document.querySelector("#grandTotal");

  const billTotal = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const divideBy = parseFloat(divideByInput.value);

  const calculation = billTotal * tipPercentage + billTotal / divideBy;
  const formattedTotal = calculation.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  grandTotalText.innerText = "$" + formattedTotal;

  const billTotalText = document.querySelector("#billTotalText");
  billTotalText.innerText = "$" + billTotal;
});

function formatNumber(input) {
    const value = input.value.replace(/[^\d]/g, "").slice(0, 7);
    const numericValue = value.replace(/,/g, "");

  const formattedValue = Number(numericValue).toLocaleString();

  input.value = formattedValue;
}

// Must enter a number.console.error

//function clear()
