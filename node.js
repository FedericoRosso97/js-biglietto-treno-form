const inputAge=document.getElementById('user-age');
const input=document.getElementById('distance');

const button=document.getElementById('bottone');

  button.addEventListener("click", function() {
    distance=input.value;
    age=inputAge.value;
    let prezzo=distance * 0.233;
    console.log(prezzo);
    
    if(age<18){
        let sconto=(19.4/100)*distance;
        prezzo=(distance*0.233)-sconto + 'sconto 19%';
      }else if(age>65){
        let sconto=(37.7/100)*distance;
        prezzo=(distance*0.233)-sconto + 'sconto 37%';
      }

  });