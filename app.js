const abc = document.querySelectorAll('option');
const text = document.querySelector('p');
function makeAbc() {
    let letter = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < 5; i++){
        letter += possible.charAt(Math.floor(Math.random() * possible.length));
         possible = possible.replace(letter, "");
        abc[i].innerHTML = letter;
         letter = "";
        }   
  }
  makeAbc();

  function changes(){
    const chahge = document.getElementById('abc').options; 
    const sel = document.getElementById('abc').selectedIndex; 
    const x = chahge[sel].text;
    text.innerText = " ";
    let k = 1;
    fetch('./list.json')
    .then(response => response.json())
    .then(function (myJson) { 
     const obj = myJson;
       for (let i=0; i < obj.length; i++) {   
           let n = (obj[i].name).charAt(0); 
        if(x === n)
            {
            text.innerText += " " + k + "." + obj[i].name + "\n";
            ++k;
             }
      
       }
       if(k === 1){
        text.innerText = "Sorry, no matches";
       }
    })
    .catch(function(error){
      console.log("ERROR!!!");
      console.error(error);
    })
  }

