document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;

    const caseTotalPrice = newCaseNumber * 59;
    const caseElementTotal = document.getElementById('case-total');
    caseElementTotal.innerText = caseTotalPrice;

    // Sub Total
    const phoneElementTotals = document.getElementById('phone-total');
    const currentPhonetotalString = phoneElementTotals.innerText;
    const currentPhonetotal = parseInt(currentPhonetotalString);

    const caseElementTotals = document.getElementById('case-total');
    const currentCasetotalString = caseElementTotals.innerText;
    const currentCasetotal = parseInt(currentCasetotalString);

    const currentSubTotal = currentPhonetotal + currentCasetotal;

    const subtotalElement = document.getElementById('sub-total');
    subtotalElement.innerText = currentSubTotal;

    
   // Tax Total
   const taxAmount = document.getElementById('tax-amount');
   const taxTotalAmountString = (currentSubTotal * 0.1).toFixed(2);
   const taxTotalAmount = parseFloat(taxTotalAmountString);
   taxAmount.innerText = taxTotalAmount;


   // Final Total
   const finalAmount = document.getElementById('final-total');
   const finalTotalAmount = currentSubTotal + taxTotalAmount;
   finalAmount.innerText = finalTotalAmount;

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    
    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;

    const caseTotalPrice = newCaseNumber * 59;
    const caseElementTotal = document.getElementById('case-total');
    caseElementTotal.innerText = caseTotalPrice;

    // Sub Total

    const phoneElementTotals = document.getElementById('phone-total');
    const currentPhonetotalString = phoneElementTotals.innerText;
    const currentPhonetotal = parseInt(currentPhonetotalString);

    const caseElementTotals = document.getElementById('case-total');
    const currentCasetotalString = caseElementTotals.innerText;
    const currentCasetotal = parseInt(currentCasetotalString);

    const currentSubTotal = currentPhonetotal + currentCasetotal;

    const subtotalElement = document.getElementById('sub-total');
    subtotalElement.innerText = currentSubTotal;

   // Tax Total
   const taxAmount = document.getElementById('tax-amount');
   const taxTotalAmountString = (currentSubTotal * 0.1).toFixed(2);
   const taxTotalAmount = parseFloat(taxTotalAmountString);
   taxAmount.innerText = taxTotalAmount;


   // Final Total
   const finalAmount = document.getElementById('final-total');
   const finalTotalAmount = currentSubTotal + taxTotalAmount;
   finalAmount.innerText = finalTotalAmount;

})
