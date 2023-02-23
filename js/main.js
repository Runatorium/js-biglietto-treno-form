const ppkm = 0.21;
const over18 = 18;
const over65 = 65;



//Datareader//
const domButton = document.querySelector('#leggidati');

domButton.addEventListener('click', 
    function () {
        const etaDom = document.getElementById('etapasseggero');
        const etapasseggero = etaDom.value;
        console.log(etapasseggero)
        document.getElementById("displayetapsg").innerHTML = `l'età del passeggero è: ${etapasseggero} anni`;

        const kmDom = document.getElementById('kmpercorrere');
        const kmdapercorrere = kmDom.value;
        console.log(kmdapercorrere)
        document.getElementById("displaykmpercorrere").innerHTML = `Il percorso è lungo: ${kmdapercorrere} km`; 

        let costokmutente = (kmdapercorrere * ppkm);

        console.log(costokmutente);
        //Price Calculator//
        if (etapasseggero < over18){
            console.log("L'utente è minorenne")
            let prezzofinale = parseFloat((costokmutente * 80) /100).toFixed(2)
            console.log("il costo finale è " + prezzofinale);   
            document.getElementById("costofinale").innerHTML = `il prezzo del biglietto è: ${prezzofinale} € (sconto del 20%)`;   
            
            
            } else if (etapasseggero >= over65){
            console.log("L'utente è over65")
            let prezzofinale = parseFloat((costokmutente * 60) /100).toFixed(2)
            console.log("il costo finale è " + prezzofinale);
            document.getElementById("costofinale").innerHTML = `il prezzo del biglietto è: ${prezzofinale} € (sconto del 40%)`;  
                
            } else {
            console.log("l'utente non ha diritto a sconti");
            let prezzofinale = parseFloat(costokmutente).toFixed(2)
            document.getElementById("costofinale").innerHTML = `il prezzo del biglietto è: ${prezzofinale} €`;  
                
            }
            
        }  
        //Price Calculator//     
);
//Datareader//

//Reset Option//
const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        const etatempDom = document.getElementById('etapasseggero');
        etatempDom.value = "";

        const kmtempDom = document.getElementById('kmpercorrere');
        kmtempDom.value = "";
    }
);
//Reset Option//