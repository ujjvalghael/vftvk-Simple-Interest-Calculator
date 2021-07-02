function submit(){
    if (document.getElementById("principal").value <= 0){
      alert("Enter positive number");
      document.getElementById("principal").focus();
    }
    else{
      compute();
    }
  }
function compute()
{
    p = document.getElementById("principal").value;
    i = document.getElementById("interest").value;
    y = document.getElementById("years").value;
    let k = p * (i/100) * y;
    let total = +p +k;
    y2 = Number(y) + 2021;
    int = document.getElementById("rate");
    int.remove();
   	 let para = document.getElementById("result")
    text = document.createTextNode("If you deposit " + p + ",");
    text1 = document.createTextNode("at an interest rate of " + i + "%.");
    text2 = document.createTextNode("You will earn amount " + k + ",")
    text3 = document.createTextNode("in the year " + y2);
    
    para.setAttribute("margin-left", "10%")
    para.appendChild(text);
    para.appendChild(document.createElement("br"));
    para.appendChild(text1);
    para.appendChild(document.createElement("br"));
    para.appendChild(text2);
    para.appendChild(document.createElement("br"));
    para.appendChild(text3);
    int_percent = document.createTextNode(i + "%")
    TD.appendChild(int_percent);
    result = getElementById("result");
    result.appendChild(para);
    maindiv = getElementById("maindiv");
    //maindiv.setAttribute("style","height : 420px");
    //maindiv.setAttribute("Height:420 px");
    
}
/*
var rangeslider = document.getElementById("interest");
var output = document.getElementById("rate");
output.innerHTML = rangeslider.value;
  
rangeslider.oninput = rangeslide(value) {
  output.innerHTML = this.value;
  }
*/
function showValue(x){
    document.getElementById("rate").innerHTML = "";
    document.getElementById("rate").innerHTML = x + "%";
    document.getElementById("interest").setAttribute("value","x");
}