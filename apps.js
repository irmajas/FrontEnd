
 function daryk (ka){
   var x, y, rez;
   x = y = rez = 0;

   // Get the value of the input field with id="numb"
   x = parseInt(document.getElementById("numb").value);
   y = parseInt(document.getElementById("numb1").value);
   switch (ka) {
     case 1:
     rez=x+y;
       document.getElementById("demo1").innerHTML = "suma " + rez;
       break;
       case 2:
       rez=x-y;
         document.getElementById("demo1").innerHTML = "skirtumas " + rez;
               break;
         case 3:
         rez=x*y;
           document.getElementById("demo1").innerHTML = "sandauga " + rez;
           break;
           case 4:
           rez=x/y;
             document.getElementById("demo1").innerHTML = "dalmuo " + rez;
             break;
             case 5:

               rez=x%y;
                 document.getElementById("demo1").innerHTML = "sbeikos dalbos liekana " + rez;
                 break;
     default:

   }
 }
function valyti (){

document.getElementById("numb").value="";
document.getElementById("numb1").value="";
document.getElementById("demo1").innerHTML ="";
}
