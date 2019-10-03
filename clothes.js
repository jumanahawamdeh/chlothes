var name = prompt("what your name ?")
var txt;
var r = confirm("Are you intrest about fashion?");
if (r == true) {
  txt = "You are welcome";
} else {
  txt = "it's not your place";
}

var cloth = prompt("t-shirt or pants!");
while (cloth != "t-shirt" &&cloth !="pants" ){
  cloth = prompt("sorry enter the correct value :");
}
if(cloth === "t-shirt"||cloth === "pants")
{
  document.write(cloth)

}
document.write(name )
document.write( txt)
