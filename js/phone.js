function getinputElementById (isIncrise){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputString = phoneInputField.value;
    const phoneInputNum = parseInt(phoneInputString);
    let phoneInputIncrise;
    if(isIncrise ===true){
        phoneInputIncrise = phoneInputNum + 1;
    }
    else{
        phoneInputIncrise = phoneInputNum - 1;
    }
    phoneInputField.value = phoneInputIncrise;
    return phoneInputIncrise;
}

function updetPhoneTotalAmount(phoneInputIncrise){
   const phoneTotalsum = phoneInputIncrise * 1219;
   const phoneTotalElemet = document.getElementById('phone-total');
   phoneTotalElemet.innerText = phoneTotalsum;
   
}



document.getElementById('phone-btn-plus').addEventListener('click',function(){
   const phoneInputIncrise =  getinputElementById(true)
   updetPhoneTotalAmount(phoneInputIncrise);
   calcualte()   
})
document.getElementById('phone-btn-minus').addEventListener('click',function(){
    const phoneInputIncrise = getinputElementById (false)
    updetPhoneTotalAmount(phoneInputIncrise)
    calcualte()
    
})