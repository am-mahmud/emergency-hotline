function getElement(id) {
  return document.getElementById(id);
}

let totalLoveCount = 0;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-love")) {
    totalLoveCount = totalLoveCount + 1;

    const loveCounters = document.querySelectorAll(".love-count");
    for (let i = 0; i < loveCounters.length; i++) {
      loveCounters[i].innerText = totalLoveCount;
    }

    console.log("love found");
  }
});


let totalCoinCount = 100;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-call")) {
    if (totalCoinCount < 20) {
      alert("No balance");
      return;
    }

    const callButton = e.target;

    const serviceName =
      callButton.parentNode.parentNode.parentNode.children[1].innerText;
    const serviceNumber =
      callButton.parentNode.parentNode.parentNode.children[3].innerText;

    alert(
      "Each call will cut 20 coins.\nService Name: " +
        serviceName +
        "\nService Number: " +
        serviceNumber
    );

    totalCoinCount = totalCoinCount - 20;


    const coinCounters = document.querySelectorAll(".coin-count");
    for (let i = 0; i < coinCounters.length; i++) {
      coinCounters[i].innerText = totalCoinCount;
    }
  }
});


let totalCopyCount = 0;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-copy")) {
    const copyButton = e.target;

    const serviceName =
      copyButton.parentNode.parentNode.parentNode.children[1].innerText;
    const serviceNumber =
      copyButton.parentNode.parentNode.parentNode.children[3].innerText;

    console.log("Copied:", serviceName, serviceNumber);

    
    navigator.clipboard.writeText(serviceNumber);

    totalCopyCount = totalCopyCount + 1;

    
    const copyCounters = document.querySelectorAll(".copy-count span");
    for (let i = 0; i < copyCounters.length; i++) {
      copyCounters[i].innerText = totalCopyCount;
    }
  }
});



