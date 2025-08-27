function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//loveCount 

let totalLoveCount = 0;

getElement("cards-container").addEventListener("click", function (e){
    if (e.target.className.includes("btn-love")){
        totalLoveCount += 1;
        
        const loveCountElement = document.querySelector(".love-count");

        loveCountElement.innerText = totalLoveCount;
    }
});

// Coin 
let totalCoinCount = 100;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-call")) {
    const callButton = e.target;

    if (totalCoinCount < 20) {
      alert("No balance");
      return;
    }

    const serviceName = callButton.parentNode.parentNode.parentNode.children[1].innerText;
    console.log(serviceName);
    const serviceNumber = callButton.parentNode.parentNode.parentNode.children[3].innerText;
    console.log(serviceNumber);

    alert(`Each call will cut 20 coins.\nService Name: ${serviceName}\nService Number: ${serviceNumber}`);

    totalCoinCount = totalCoinCount - 20;

    const coinCountElement = document.querySelector(".coin-count");
    coinCountElement.innerText = totalCoinCount; 
  }
});

// Copy

let totalCopyCount = 0;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-copy")) {
    const copyButton = e.target;
    
    const serviceName = callButton.parentNode.parentNode.parentNode.children[1].innerText;
    console.log(serviceName);

    const serviceNumber = copyButton.parentNode.parentNode.parentNode.children[3].innerText;
    console.log(serviceNumber);

    navigator.clipboard.writeText(serviceNumber);

    totalCopyCount += 1;
    
    const copyCountParent = document.querySelector(".copy-count");

    const copyCountChild = copyCountParent.children[0];

    copyCountChild.innerText = totalCopyCount;
    
  
  }
});