var name="Chu";
alert("Hello" + name);
var name ="Yu";
var age = 20;
var isBoy = false;
var songs = ["starry night","egotistic","wind flower","gogobebe"];
alert(name); 
alert(age);
alert(isBoy);
alert(songs[0]);
alert(songs[2]);
function addition(num){
	return num+10;}
var age = 28;
var trueage= addition(age);
alert(trueage);//”38”

var age2 = 18;
var trueage2= addition(age2);
alert(trueage2);//”28”
function test(){
	a=123;
	var b=456;
	if(a == 123) var c=789;
}
 document.getElementById("byid").innerHTML="我來自id";
 document.getElementById("byid").style.color="darkblue";
 
 document.getElementsByClassName("byclass")[0].innerHTML = "我來自class";
 document.getElementsByClassName("byclass")[0].style.fontSize = "30px";

 document.getElementsByTagName("div")[2].innerHTML="我來自Tag";
 document.getElementsByTagName("div")[2].style.fontFamily="微軟正黑體";

 document.getElementsByTagName("p")[0].innerHTML="MAMAMOO";
 document.getElementsByTagName("p")[0].style.color="red";
 document.getElementsByTagName("p")[0].style.fontSize = "30px";