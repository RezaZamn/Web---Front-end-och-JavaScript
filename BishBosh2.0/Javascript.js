

//Väntar tills sidan är laddad för att ha till gång till HTML-element
document.addEventListener('DOMContentLoaded', () => {

    //Lagrar refrenser till HTML-element med specifika id-attribut i variabler
    const bishInput = document.getElementById('bish');
    const boshInput = document.getElementById('bosh');
    const countInput = document.getElementById('count');
    const startButton = document.getElementById('startButton');
    const resultDiv = document.getElementById('result');


    //Lägger till en eventlistener på startknappen
    startButton.addEventListener('click', () => {

        //Hämtar och konverterar inmatningar till siffror
        const bish = parseInt(bishInput.value);
        const bosh = parseInt(boshInput.value);
        const count = parseInt(countInput.value);

        console.log(`Bish: ${bish}, Bosh: ${bosh}, Count: ${count}`); // Visar inmatade värden i console


        if (bish <= 0 || bosh <= 0 || count <= 0) {//Validerar att värden ska vara noll eller större
            resultDiv.innerHTML = "Vänligen ange positiva värden för Bish, Bosh och antal loopar.";
            return; // Avsluta om något värde är ogiltig
        }


        let output = "";  //Samlar resultaten i tomma sträng

        for (let i = 1; i <= count; i++) {
            if (i % bish === 0 && i % bosh === 0) {
                output += "Bish-Bosh<br>";
                console.log('Bish-Bosh');
            }


            else if (i % bish === 0) {
                output += "Bish<br>";
                console.log('Bish')
            }


            else if (i % bosh === 0) {
                output += "Bosh<br>";
                console.log('Bosh');
            }

            else {
                output += i + "<br>";
                console.log(i);
            }
        }

        resultDiv.innerHTML = output;

           // Tömmer input-fälten efter körning
            bishInput.value = '';
            boshInput.value = '';
            countInput.value = '';

  

    });

});
