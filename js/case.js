function getinputcaseElementById (isIncrise){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value;
    const caseInputNum = parseInt(caseInputString);
    let caseInputIncrise;
    if(isIncrise ===true){
        caseInputIncrise = caseInputNum + 1;
    }
    else{
        caseInputIncrise = caseInputNum - 1;
    }
    caseInputField.value = caseInputIncrise;
    return caseInputIncrise;
}

function updetCaseTotalAmount (caseInputIncrise){
  const caseTotalAmount = caseInputIncrise * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = caseTotalAmount;
}

document.getElementById('case-btn-plus').addEventListener('click',function(){
  const caseInputIncrise =   getinputcaseElementById (true);
  updetCaseTotalAmount (caseInputIncrise)
  calcualte()
    
})
document.getElementById('case-btn-minus').addEventListener('click',function(){
    const caseInputIncrise =  getinputcaseElementById (false)
    updetCaseTotalAmount (caseInputIncrise)
    calcualte()
   

})