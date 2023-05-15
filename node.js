const age=parseInt(document.getElementById('user-age'));
const distance=parseInt(document.getElementById('distance'));

let prezzo=distance * 0.233

const button=document.getElementById('bottone');

  if(age<18){
    let sconto=(19.4/100)*distance;
    prezzo=(distance*0.233)-sconto;
  }else if(age>65){
    let sconto=(37.7/100)*distance;
    prezzo=(distance*0.233)-sconto;
  }

  button.addEventListener("click", function() {
    console.log(age);
    console.log(distance);
    console.log(prezzo);
  });