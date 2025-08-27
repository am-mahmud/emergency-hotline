function getElement(id) {
  return document.getElementById(id);
}


let totalLoveCount = 0;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-love")) {
    totalLoveCount += 1;

    // update all love counters
    const loveCounters = document.querySelectorAll(".love-count");
    loveCounters.forEach(function (el) {
      el.innerText = totalLoveCount;
    });

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

    // find service name & number from card
    const serviceName =
      callButton.parentNode.parentNode.parentNode.children[1].innerText;
    const serviceNumber =
      callButton.parentNode.parentNode.parentNode.children[3].innerText;

    alert(
      `Each call will cut 20 coins.\nService Name: ${serviceName}\nService Number: ${serviceNumber}`
    );

    totalCoinCount -= 20;

    // update all coin counters
    const coinCounters = document.querySelectorAll(".coin-count");
    coinCounters.forEach(function (el) {
      el.innerText = totalCoinCount;
    });
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

    console.log(serviceName, serviceNumber);

    // copy number to clipboard
    navigator.clipboard.writeText(serviceNumber);

    totalCopyCount += 1;

    // update all copy counters
    const copyCounters = document.querySelectorAll(".copy-count span");
    copyCounters.forEach(function (el) {
      el.innerText = totalCopyCount;
    });
  }
});
