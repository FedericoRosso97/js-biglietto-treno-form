const inputAge=document.getElementById('user-age');
const inputDistance=document.getElementById('distance');

const button=document.getElementById('bottone');
const recap=document.querySelector('div.recapi');
  
    button.addEventListener("click", function() {
    let distance=inputDistance.value;
    let age=inputAge.value;
    let prezzo=distance * 0.233;

    console.log(age);
    console.log(distance);
    
    if(age<18){
        let sconto=(19.4/100)*distance;
        prezzo=(distance*0.233)-sconto;
      }else if(age>65){
        let sconto=(37.7/100)*distance;
        prezzo=(distance*0.233)-sconto;
      }
      console.log(prezzo);
      let prezzoArrotondato=prezzo.toFixed(2)
      recap.classList.add('visible');
      recap.classList.remove('invisible');

      const Eta=document.querySelector('p.età')
      Eta.innerHTML +=age+' '+'anni!';

      const km=document.querySelector('p.distanza')
      km.innerHTML +=distance+' '+'chilometri!';

      const soldi=document.querySelector('p.price')
      soldi.innerHTML +=prezzoArrotondato+' '+'euro!';

      const eta=document.querySelector('p.eta')
      eta.innerHTML +=age+' '+'anni!';

      const Km=document.querySelector('p.Distanza')
      Km.innerHTML +=distance+' '+'chilometri!';

      const Soldi=document.querySelector('p.Price')
      Soldi.innerHTML +=prezzoArrotondato+' '+'euro!';

  });

