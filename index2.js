let input=document.querySelector("input");
let buttons=document.querySelectorAll("button")
let arr=Array.from(buttons);
let string =""

arr.forEach(action);
function action(element){
    element.addEventListener('click',password);
}
function password(e){
    if(string.length >4){
        alert("PIN IS OF 4 DIGIT");
    }

    else if(e.target.innerHTML == "OK"){
        if(string == "2577")
            alert("CONGRATULATIONS");
        else
        alert("WRONG PIN");
            
    }
    else if(e.target.innerHTML=='DEL'){
       string=string.substring(0,string.length-1);
       input.value=string;
    }
    else {
    string+=e.target.innerHTML;
        input.value=string;
    }

}