// A simple function to get elements by ID
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// Global counters
let totalLoveCount = 0;
let totalCoinCount = 100;
let totalCopyCount = 0;

// The main container for all card buttons
const cardsContainer = getElement("cards-container");

// The button container for the mobile nav
const navBar = getElement("nav-bar");

// Attach a single click listener to the cards container
cardsContainer.addEventListener("click", function (e) {
    // Find the closest button with the 'btn-love' class
    const loveButton = e.target.closest(".btn-love");
    const callButton = e.target.closest(".btn-call");
    const copyButton = e.target.closest(".btn-copy");

    // Handle the Love button click
    if (loveButton) {
        totalLoveCount += 1;
        document.querySelector(".love-count").innerText = totalLoveCount;
        console.log("Love button was clicked.");
    }
    
    // Handle the Call button click
    if (callButton) {
        if (totalCoinCount < 20) {
            alert("No balance");
            return;
        }

        const card = callButton.closest(".card");
        const serviceName = card.querySelector(".card-title").innerText;
        const serviceNumber = card.querySelector(".card-title.mt-2").innerText;

        alert(`Each call will cut 20 coins.\nService Name: ${serviceName}\nService Number: ${serviceNumber}`);

        totalCoinCount = totalCoinCount - 20;
        document.querySelector(".coin-count").innerText = totalCoinCount;
    }

    // Handle the Copy button click
    if (copyButton) {
        const card = copyButton.closest(".card");
        const serviceNumber = card.querySelector(".card-title.mt-2").innerText;

        navigator.clipboard.writeText(serviceNumber);

        totalCopyCount += 1;
        const copyCountSpan = document.querySelector(".copy-count > span");
        copyCountSpan.innerText = totalCopyCount;
    }
});

// Listener for the mobile nav buttons
navBar.addEventListener("click", function(e) {
    const loveNavButton = e.target.closest(".btn-nav-love");

    if (loveNavButton) {
        totalLoveCount += 1;
        document.querySelector(".love-count").innerText = totalLoveCount;
    }
});