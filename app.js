const abc = document.querySelectorAll('option');
const text = document.querySelector('p');
function makeAbc() {
    let letter = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0, j = 1; i < 5; i++, j++){
        letter += possible.charAt(Math.floor(Math.random() * possible.length));
         possible = possible.replace(letter, "");
        abc[j].innerHTML = letter;
         letter = "";
        }   
  }
  makeAbc();

  function changes(){
    const chahge = document.getElementById('abc').options; 
    const sel = document.getElementById('abc').selectedIndex; 
    text.innerText = " ";
    let sumFoundElenents = 1;
    fetch('./list.json')
    .then(response => response.json())
    .then(function (myJson) { 
     const obj = myJson;
     if(chahge[sel].text==="Letter"){
      text.innerText = "Select a letter";
     }else{
       for (let i=0; i < obj.length; i++) {   
           let n = (obj[i].name).charAt(0); 
        if((chahge[sel].text) === n)
            {
            text.innerText += " " + sumFoundElenents + "." + obj[i].name + "\n";
            ++sumFoundElenents;
             }
      
       }
       if(sumFoundElenents === 1){
        text.innerText = "Sorry, no matches";
       }
      }
    })
    .catch(function(error){
      console.log("ERROR!!!");
      console.error(error);
    })
  }

