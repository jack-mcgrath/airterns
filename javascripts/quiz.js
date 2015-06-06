function main(){
var choice;
var right=false;
choice=prompt("What's your name?");
choice=choice.toUpperCase();
var names2014 = ["DALTON", "VIVIAN", "TESS", "JACK", "ANDREW", "LAWRENCE", "CARTER", "JESSICA", "CATHIE", "RASMUS", "KEVIN", "SIERRA", "ABBY", "NIKKI", "JACKSON", "MINA", "SARAH", "NATHAN", "MICHAEL", "EMILY", "NICOLAS"];
var names2015 = ["ANUPA", "ARTHUR", "CHARLES", "CHRISTINA", "CONG", "COREY", "DANIEL", "DAVID", "EVAN", "GABE", "GREG", "GREGORY", "IAIN", "JACK", "JACQLYN", "JESSICA", "JOEL", "JORDAN", "JULIA", "KEZIAH", "LINCOLN", "LINDA", "LIZ", "MACKENZIE", "MARC", "MAYA", "MELANIE", "NICO", "NICOLAS", "OLIVIA", "QI", "RAISSA", "ROB", "ROEE", "SAM", "SHREYAS", "SHU-HAN", "SOPHIA", "SUMEET", "TUSHAR", "WHITNEY", "YAUN", "ZHENG", "ZULSAR"]
  for (var i=0; i<names2015.length; ++i){
    if (choice==names2014[i]){
      alert("yes u r (old fella)");
      right=true;
    }
    if (choice==names2015[i]){
      alert("yes u r!!!");
      right=true;
    }
  }
  if (!right){
    alert("nope");
  }
  if (right && choice=="EMILY"){
    alert(":) :) :)");
  }
}
