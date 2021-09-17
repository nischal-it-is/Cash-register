var bill=document.querySelector("#billAmount");
var cash=document.querySelector("#cash");
var sub=document.querySelector("#submit");
var notes=document.querySelectorAll('.no-of-notes');//important step
var denomination=['2000','500','100','20','10','5','1'];
var message=document.querySelector('#message');

//var denomination=['1','5','10','20','100','500','2000'];
//console.log(notes);
messageHide();
sub.addEventListener('click',function display(){
    // console.log(cash.value);
    //     console.log("bill amount "+bill.value);
    const billAmt=Number(bill.value);
    const cashAmt=Number(cash.value);
    if(billAmt==0||cashAmt==0)
    {
        errorMessage('Invalid Input');
    }
    else if(cashAmt<billAmt)
    {
        //alert('Payment is not full! Credit remaining');
        errorMessage('Payment is not full! Credit Remaining');
    }
    else if(cashAmt==billAmt)
    {
        errorMessage('No amount to be returned');
    }
    else{
        messageHide();
        
        var amountToBeReturned=cashAmt-billAmt;
        console.log(amountToBeReturned);
        calculateNotes(amountToBeReturned);
        
    }
    

})
function messageHide()
{
    message.style.display="none";
}
function errorMessage(text)
{
    message.innerText=text;
    message.style.display="block";
}
function calculateNotes(amountToBeReturned)
{
    for (let i = 0; i < denomination.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / denomination[i]);
        
        amountToBeReturned = amountToBeReturned % denomination[i];
        notes[i].innerText = numberOfNotes;
      }
      /*logic of loop is
      1. number of notes of a particular denomination
      say let amount = 5000
      numberOf notes of 2000=5000/2000=2
      amountremaining=5000%2000=1000
      andfilling in the table notes[i].innerText=numberOfNotes
      */
  }
