let totalGrams = 0; // Variable to store the running total
let kitchenCount = 0; // Counter to track the number of kitchens calculated

function calculatePortions() {
    console.log("Calculate button clicked"); // Debugging

    const department = document.getElementById('department').value;
    const dish = document.getElementById('dish').value;
    const barn = parseInt(document.getElementById('barn').value) || 0;
    const vuxna = parseInt(document.getElementById('vuxna').value) || 0;

    console.log({ department, dish, barn, vuxna }); // Debugging

    if (!dish) {
        alert("Please select a dish.");
        return;
    }

    const portionSizes = {
        potatis: { barn: 120, vuxna: 240 },
        pasta: { barn: 55, vuxna: 110 },
        ris: { barn: 54, vuxna: 108 },
        kyckling: { barn: 75, vuxna: 150 },
        köttfärs: { barn: 60, vuxna: 120 },
        fisk: { barn: 100, vuxna: 200 },
        "fisk-kokt": { barn: 55, vuxna: 110 },
        "fisk-stekt": { barn: 55, vuxna: 110 },
        fiskgratäng: { barn: 55, vuxna: 110 },
        fiskpudding: { barn: 55, vuxna: 110 },
        fiskbullar: { barn: 55, vuxna: 110 },
        "kyckling-hel": { barn: 55, vuxna: 110 },
        köttfärssås: { barn: 55, vuxna: 110 },
        köttgryta: { barn: 55, vuxna: 110 },
        chili: { barn: 55, vuxna: 110 },
        pyttipanna: { barn: 55, vuxna: 110 },
        lasagne: { barn: 55, vuxna: 110 },
        pannkaka: { barn: 55, vuxna: 110 },
        soppa: { barn: 55, vuxna: 110 },
        potatismos: { barn: 55, vuxna: 110 }
    };

    const selectedDish = portionSizes[dish];
    if (!selectedDish) {
        alert("Invalid dish selected!");
        return;
    }

    const barnTotal = barn * selectedDish.barn;
    const vuxnaTotal = vuxna * selectedDish.vuxna;
    const total = barnTotal + vuxnaTotal;

    console.log({ barnTotal, vuxnaTotal, total }); // Debugging

    totalGrams += total;
    kitchenCount++;

    const resultsDiv = document.getElementById('results');
    const resultHTML = `
        <div>
            <h3>Mängd per FSK: ${department}</h3>
            <p><strong>Maträtt:</strong> ${dish.charAt(0).toUpperCase() + dish.slice(1)}</p>
            <p>Barn: ${barn} × ${selectedDish.barn}g = <strong>${barnTotal}g</strong></p>
            <p>Vuxna: ${vuxna} × ${selectedDish.vuxna}g = <strong>${vuxnaTotal}g</strong></p>
            <p><strong>Total Mängd:</strong> ${total} gram</p>
        </div>
        <hr>
    `;
    resultsDiv.insertAdjacentHTML('beforeend', resultHTML);

    document.getElementById('totalAmount').innerText = `${totalGrams} grams`;
}

function clearResults() {
    document.getElementById('results').innerHTML = ''; // Clear results
    document.getElementById('totalAmount').innerText = '0 grams'; // Reset total
    totalGrams = 0; // Reset running total
    kitchenCount = 0; // Reset kitchen count
}
