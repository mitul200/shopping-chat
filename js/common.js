function getStringToNumberById (elementId){
    const phoneTotalElemetNumber = document.getElementById(elementId)
    const phoneTotalElemetString = phoneTotalElemetNumber.innerText
    const phoneTotalElemetAmount = parseInt(phoneTotalElemetString);
    return phoneTotalElemetAmount;
 }
 function setValueElementById (elementId , value){
    const taxTotalElement = document.getElementById(elementId);
    taxTotalElement.innerText = value;

 }
 function calcualte(){
     const phoneTotalElemetAmount  = getStringToNumberById ('phone-total')
    const caseTotalElementAmount =  getStringToNumberById ('case-total')
    const subTotalElement = document.getElementById('Sub-total');
    const subTotalAmount= phoneTotalElemetAmount+caseTotalElementAmount;
    subTotalElement.innerText = subTotalAmount;
    // Tax
    const taxAmountString = (subTotalAmount *0.1).toFixed(2);
    const taxAmountNumber = parseInt(taxAmountString);
    setValueElementById('tax-amount',taxAmountNumber);
    // finalAmount
    const finalCost = subTotalAmount + taxAmountNumber;
    setValueElementById('main-amount',finalCost);
    
 }