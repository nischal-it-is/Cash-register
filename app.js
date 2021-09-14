var bill=document.querySelector("#billAmount");
var cash=document.querySelector("#cash");
var sub=document.querySelector("#submit");
var notes=document.querySelectorAll('.no-of-notes');//important step
var denomination=['2000','500','100','20','10','5','1'];
console.log(notes);
sub.addEventListener('click',function display(){
    if(bill.value<0)
    {
        alert('bill amount cannot be negative or zero');
    }
    if(bill.value==0)
    {
        alert('Please enter bill amount');
    }
    if(cash.value<0)
    {
        alert('Invalid cash input');
    }
    if(cash.value>bill.value)
    {
        alert('Payment is not full! Credit remaining');
    }
    else{
        var amountToBeReturned=cash.value-bill.value;
        console.log(amountToBeReturned);
        calculateNotes(amountToBeReturned);
        
    }
    

})
function calculateNotes(amountToBeReturned)
{
    for (let i = 0; i < denomination.length; i++) {
        // no of notes need for the denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / denomination[i]);
        // 2010 / 2000 = 1 || 10 / 500 = 0
    
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % denomination[i];
        // 2010 % 2000 = 10 || 10 % 500 = 10
    
        // updating the no of notes in the table for the current amount
        
        notes[i].innerText = numberOfNotes;
      }
  }
