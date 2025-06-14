var input = document.getElementById("input_id");
var button = document.getElementById("btn_id");
var text = document.getElementById("teksti_id");

button.onclick= function(){
    text.innerHTML = input.value;
}

//var teksti1 ="the best sc in the world Digital School"
//var result= teksti1.search("Digital School");
//document.getElementById("results1").innerHTML;

//var teksti1 ="the best sc in the world Digital School"
//var result= teksti1.search(/"Digital School"/,"another school");
//document.getElementById("results2").innerHTML;

//var teksti1 ="abcdef"

//var ckamebesearch= new RegExp('abc')

//document.getElementById("results4").innerHTML=ckamebesearch.test(teksti1)

//var teksti1 ="My school is the best school in the world"

//var ckamebesearch= /school/g

//document.getElementById("results5").innerHTML=ckamebesearch.match(ckamebesearch)

//var teksti1 ="My school is the best school in the world"

//var ckamebesearch= /i/g

//document.getElementById("results5").innerHTML=ckamebesearch.match(ckamebesearch)

//var teksti1 ="My school is the best school in the world"
//var ckamebesearch= /[abc]/g
//document.getElementById("results5").innerHTML=ckamebesearch.match(ckamebesearch)

var teksti1 ="My school is top 10"
var ckamebesearch= /[0-9]/g
document.getElementById("results5").innerHTML=teksti1.match(ckamebesearch)