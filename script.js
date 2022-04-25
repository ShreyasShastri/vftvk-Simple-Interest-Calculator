
function compute()
{
    let amount = document.getElementById("principal").value;
    if(amount > 0)
    {
        let rate = document.getElementById('range-text').innerText;
        let y = document.getElementById("years");
        let years = y.options[y.selectedIndex].value;
        let interest = amount*parseFloat(rate)*parseInt(years) / 100;
        const d = new Date();
        let currentYear = d.getFullYear();
        let finalYear = parseInt(currentYear) + parseInt(years);
        let output = `If you deposit <mark>${amount}</mark>, </br> at an interest rate of <mark>${rate}</mark>. </br>You will receive an amount of <mark>${interest}</mark>,</br>in the year <mark>${finalYear}</mark>`;
        document.getElementById("final-text").innerHTML = output;
    }
    else{
        alert("Please enter a positive number !!");
        document.getElementById("principal").focus();
    }
    
}

function updateTextInput(val) {
    document.getElementById('range-text').innerText=val+"%"; 
  }
        