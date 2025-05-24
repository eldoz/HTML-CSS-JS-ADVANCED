var butoni1 = document.getElementById('btn1')
var butoni2 = document.getElementById('btn2')
var butoni3 = document.getElementById('btn3')
var text = document.getElementById('text')



butoni1.onclick=function(){
    text.setAttribute('class',"shape_circle")

}

butoni2.onclick=function(){
    text.setAttribute('class',"shape_rect")
    
}

butoni3.onclick=function(){
    text.setAttribute('class',"shape_triangle")
    
}