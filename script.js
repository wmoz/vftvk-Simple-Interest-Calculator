function compute()
{
    var p = document.getElementById("principal").value;
    if(p <=0 || p === null)
    {
        window.alert("Please Enter Postive Number!");
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var intr = p *years* (rate/100);
    
    
    var year = new Date().getFullYear()+ parseInt(years);

    document.getElementById("result").innerText = "If you deposit "+ p+ ", at an interest rate of " + rate + ". You will receive an amount of " + intr + ", in the year " + year;


    
  
    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        
