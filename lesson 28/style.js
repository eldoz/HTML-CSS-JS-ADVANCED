var butoni1 = document.getElementById('btn1')
var butoni2 = document.getElementById('btn2')
var butoni3 = document.getElementById('btn3')
var butoni4 = document.getElementById('btn4')
var butoni4 = document.getElementById('btn5')
var text = document.getElementById('text')

butoni1.onclick= function(){
    text.style.color="red";
    text.style.backgroundColor="lightgrey";
     text.style.textAlign="center";
    text.style.fontSize="100px";
    text.style.padding="20px"
}

butoni2.onclick= function(){
    text.style.color="";
    text.style.backgroundColor="";
     text.style.textAlign="";
    text.style.fontSize="";
    text.style.padding=""
}

text.onmouseover=function(){
    text.style.cssText="color:red;background-color: lightblue;text-align:center;font-size:100px;padding:20px";

}

butoni3.onclick=function(){
    text.setAttribute('class',"test")

}

butoni4.onclick=function(){
    text.setAttribute('class',"test2")
    
}

butoni5.onclick=function(){
    text.setAttribute('class',"shape_circle")
    
}