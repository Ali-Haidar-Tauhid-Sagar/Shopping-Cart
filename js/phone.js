document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phonNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phonNumberString);

    const newPhoneNumber = previousPhoneNumber + 1;
    phoneNumberField.value = newPhoneNumber;

    const newPhoneTotalprice = newPhoneNumber * 1219;
    const phoneElementTotal = document.getElementById('phone-total');
    phoneElementTotal.innerText = newPhoneTotalprice;

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

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phonNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phonNumberString);

    const newPhoneNumber = previousPhoneNumber - 1;
    phoneNumberField.value = newPhoneNumber;

    const newPhoneTotalprice = newPhoneNumber * 1219;
    const phoneElementTotal = document.getElementById('phone-total');
    phoneElementTotal.innerText = newPhoneTotalprice;


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