function main(){
var choice;
var a=0;
choice=prompt("What's your name?");
choice=choice.toUpperCase();
var names = ["DALTON", "VIVIAN", "TESS", "JACK", "ANDREW", "LAWRENCE", "CARTER", "JESSICA", "CATHIE", "RASMUS", "KEVIN", "SIERRA", "ABBY", "NIKKI", "JACKSON", "MINA", "SARAH", "NATHAN", "MICHAEL", "EMILY", "NICOLAS"];
  for (var i=0; i<names.length; ++i){
    if (choice==names[i]){
      alert("yes u r");
      a++;
    }
  }
  if (a==0){
    alert("nope");
  }
  if (a==1 && choice=="EMILY"){
    alert(":) :) :)");
  }
}