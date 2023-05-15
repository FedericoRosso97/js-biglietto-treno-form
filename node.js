const age=parseInt(document.getElementById('user-age'));
const input=document.getElementById('distance');



const button=document.getElementById('bottone');

  if(age<18){
    let sconto=(19.4/100)*distance;
    prezzo=(distance*0.233)-sconto;
  }else if(age>65){
    let sconto=(37.7/100)*distance;
    prezzo=(distance*0.233)-sconto;
  }

  button.addEventListener("click", function() {
    distance=input.value;
    let prezzo=distance * 0.233;
    console.log(prezzo);
  });