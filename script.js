const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    function formatNumber(value, minimumFractionDigits, maximumFractionDigits) {
      const stringValue = String(value);
        const numericValue = stringValue.replace(/[^\d.]/g, "").slice(0, 7);
      const formattedValue = Number(numericValue).toLocaleString(undefined, {
        minimumFractionDigits: minimumFractionDigits,
        maximumFractionDigits: maximumFractionDigits,
      });
        return formattedValue
    }
  const billInput = document.querySelector("#billInput");
  const tipPercentageInput = document.querySelector("#tipPercentageInput");
  const divideByInput = document.querySelector("#divideByInput");
  const grandTotalText = document.querySelector("#grandTotalText");

  const billTotal = parseFloat(billInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
    const divideBy = parseFloat(divideByInput.value);

  const calculation = billTotal + (tipPercentage * billTotal);
  const formattedTotal = calculation.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
    grandTotalText.innerText = "$" + formattedTotal;
    
        

  const billTotalText = document.querySelector("#billTotalText");
    billTotalText.innerText = "$" + billTotal
    
    
    const tipTotalText = document.querySelector('#tipTotalText')
    const tipTotal = billTotal * tipPercentage
    tipTotalText.innerText = "$" + formatNumber(tipTotal, 2, 2)

    const tipEachText = document.querySelector('#tipEachText')
    const tipEach = (billTotal * tipPercentage) / divideBy
    tipEachText.innerText = '$' + formatNumber(tipEach, 2, 2)

    const totalEachText = document.querySelector('#totalEachText')
    const totalEach = calculation / divideBy
    totalEachText.innerText = '$' + formatNumber(totalEach, 2, 2)

    const fifteen = document.querySelector('#fifteen')
    const fifteenMath = billTotal * 0.15
    fifteen.innerText = '15%: $' + formatNumber(fifteenMath, 2, 2)

    const twenty = document.querySelector('#twenty')
    const twentyMath = billTotal * 0.20
    twenty.innerText = '20%: $' + formatNumber(twentyMath, 2, 2)

    const twentyFive = document.querySelector('#twentyFive')
    const twentyFiveMath = billTotal * 0.25
    twentyFive.innerText = '25%: $' + formatNumber(twentyFiveMath, 2, 2)

    

});

// function formatNumber(value, minimumFractionDigits, maximumFractionDigits) {
//   const numericValue = value.replace(/[^\d.]/g, "").slice(0, 7);
//   const formattedValue = Number(numericValue).toLocaleString(undefined, {
//     minimumFractionDigits: minimumFractionDigits,
//     maximumFractionDigits: maximumFractionDigits,
//   });
//   return formattedValue;
// }

// function formatNumber(input) {
//   const value = input.value.replace(/,/g, "");
//   const numericValue = value.replace(/[^\d.]/g, "").slice(0, 7);
//   const formattedValue = Number(numericValue).toLocaleString();

//   input.value = formattedValue;
// }

// Must enter a number.console.error

//function clear()
