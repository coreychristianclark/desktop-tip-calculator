const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const billInput = document.querySelector("#billInput");
  const tipPercentageInput = document.querySelector("#tipPercentageInput");
  const divideByInput = document.querySelector("#divideByInput");
  const grandTotalText = document.querySelector("#grandTotalText");

  const billTotal = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const divideBy = parseFloat(divideByInput.value);

  const calculation = billTotal * tipPercentage + billTotal;
  const formattedTotal = calculation.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  grandTotalText.innerText = "$" + formattedTotal;

  const billTotalText = document.querySelector("#billTotalText");
    billTotalText.innerText = "$" + billTotal;
    
    const tipTotalText = document.querySelector('#tipTotalText')
    tipTotalText.innerText = "$" + (billTotal * tipPercentage)

    const tipEachText = document.querySelector('#tipEachText')
    tipEachText.innerText = '$' + (billTotal * tipPercentage) / divideBy

    const totalEachText = document.querySelector('#totalEachText')
    totalEachText.innerText = '$' + (calculation / divideBy)

    const fifteen = document.querySelector('#fifteen')
    fifteen.innerText = '15%: $' + billTotal * 0.15

    const twenty = document.querySelector('#twenty')
    twenty.innerText = '20%: $' + billTotal * 0.20

    const twentyFive = document.querySelector('#twentyFive')
    twentyFive.innerText = '25%: $' + billTotal * 0.25

});

function formatNumber(input) {
    const value = input.value.replace(/[^\d]/g, "").slice(0, 7);
    const numericValue = value.replace(/,/g, "");

  const formattedValue = Number(numericValue).toLocaleString();

  input.value = formattedValue;
}

// Must enter a number.console.error

//function clear()
