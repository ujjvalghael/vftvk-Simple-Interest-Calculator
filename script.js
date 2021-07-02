function compute()
{
    p = document.getElementById("principal").value;
    i = document.getElementById("interest").value;
    y = document.getElementById("years").value;
    let k = p * (i/100) * y;
    let total = +p +k;
    y2 = Number(y) + 2021;
    int = document.getElementById("interest");
    int.remove();
   	 let para = document.getElementById("maindiv")
    t = document.createTextNode("If you deposit " + p + ",");
    t1 = document.createTextNode("at an interest rate of " + i + ".");
    t2 = document.createTextNode("You will earn amount " + k + ",")
    t20 = document.createTextNode("Your total amount will be " + total + ",")
    t3 = document.createTextNode("in the year " + y2);
    para.appendChild(document.createElement("br"));
    para.appendChild(document.createElement("br"));
    para.setAttribute("margin-left", "10%")
    para.appendChild(t);
    para.appendChild(document.createElement("br"));
    para.appendChild(t1);
    para.appendChild(document.createElement("br"));
    para.appendChild(t2);
    para.appendChild(document.createElement("br"));
    para.appendChild(t20);
    para.appendChild(document.createElement("br"));
    para.appendChild(t3);
    int_percent = document.createTextNode(i + "%")
    TD.appendChild(int_percent);
    document.body.appendChild(para);
    
}

var rangeslider = document.getElementById("interest");
var output = document.getElementById("rate");
output.innerHTML = rangeslider.value;
  
rangeslider.oninput = function() {
  output.innerHTML = this.value;
  }