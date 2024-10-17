
// Hämtar refrencer till HTMl-element
const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// Funktion för att lägga till en vara i listan
function addItem() {
    const itemValue = itemInput.value.trim(); // Hämtar och trimmar inmatningen

    if (itemValue) { // Kontrollerar att inputfältet inte är tomt

        const listItem = document.createElement('li');  //Skapa ett nytt listobjekt
        listItem.textContent = itemValue;              //Sätt texten till varans namn

        //Lägg till en eventListener för att markera över varan
        listItem.addEventListener('click', function () {
        listItem.classList.toggle('purchased');

        listItem.addEventListener('dblclick', function(){
        itemList.removeChild(listItem); // Tar bort listobjektet från listan

        });

        });

        itemList.appendChild(listItem);            //Lägg till listobjektet i listan
        itemInput.value = '';                      //Rensar inputfältet efter tillägg

    }

    else {
        alert("Vänligen skriv in en vara."); //Meddelande om inget är inmatat
    }

}

//Lägger till en eventListener på knappen
addButton.addEventListener('click', addItem);

addButton.addEventListener('click', removeEventListener);

//Läggr till en eventListener för Enter-tangenten
itemInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { //Kontorollerar om det är Enter-tanganten
        addItem();
    }

});