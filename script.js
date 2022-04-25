function compute()
{
    let amount = document.getElementById("principal").value;
    let rate = document.getElementById('range-text').innerText;
    let y = document.getElementById("years");
    let years = y.options[y.selectedIndex].value;
    let interest = amount*parseFloat(rate)*parseInt(years) / 100;
    const d = new Date();
    let currentYear = d.getFullYear();
    let finalYear = parseInt(currentYear) + parseInt(years);
    let output = `If you deposit ${amount}, </br> at an interest rate of ${rate}&#37. </br>You will receive an amount of ${interest},</br>in the year ${finalYear}`;
    document.getElementById("final-text").innerHTML = output;
}

function updateTextInput(val) {
    document.getElementById('range-text').innerText=val; 
  }
        