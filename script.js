
function advGen(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        const myObj = JSON.parse(this.responseText);
        if(myObj.slip.id < 10){
            document.getElementById("advice_no").innerHTML = "ADVICE #00" + myObj.slip.id;
        }else if(myObj.slip.id < 100){
            document.getElementById("advice_no").innerHTML = "ADVICE #0" + myObj.slip.id;
        }else{
            document.getElementById("advice_no").innerHTML = "ADVICE #" + myObj.slip.id;
        }
        document.getElementById("advice").innerHTML = '"' + myObj.slip.advice + '"';
    }
    xhttp.open("GET","https://api.adviceslip.com/advice",true);
    xhttp.send();

}

document.getElementById("genAdvice").addEventListener("click",advGen);