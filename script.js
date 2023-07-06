const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const billInput = document.querySelector("#billInput");
  const tipPercentageInput = document.querySelector("#tipPercentageInput");
  const divideByInput = document.querySelector("#divideByInput");
  const grandTotal = document.querySelector("#grandTotal");

  let billTotal = parseFloat(billInput.value);
  let tipPercentage = parseFloat(tipPercentageInput.value);
  let divideBy = parseFloat(divideByInput.value);
  
    let calculation = (billTotal * tipPercentage) + billTotal / divideBy
    let grandTotalAmount = grandTotal.innerText = "$" + calculation
    
    
});

// Must enter a number.console.error
