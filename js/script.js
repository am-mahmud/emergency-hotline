function getElement(id) {
  return document.getElementById(id);
}

function getLocalTime() {
  const now = new Date();
  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true 
  };
  return now.toLocaleString('en-US', options);
}

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

    const historyList = getElement("history-list");

    console.log("1st click");
    
    const newCallHistory = document.createElement("div");
    newCallHistory.innerHTML = `
      <div class="flex flex-row md:flex-col md:text-center lg:flex-row justify-between items-center px-1 py-2">
        <div class="text-left">
          <div>
            <h1 class="font-bold text-sm">${serviceName}</h1>
          </div>
          <div>
            <p>${serviceNumber}</p>
          </div>
        </div>
        <div>
          <p>${getLocalTime()}</p>
        </div>
      </div>
    `;

    historyList.append(newCallHistory);

  }
});


let totalCopyCount = 0;

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("btn-copy")) {
    const copyButton = e.target;

    const serviceName = copyButton.parentNode.parentNode.parentNode.children[1].innerText;
    const serviceNumber = copyButton.parentNode.parentNode.parentNode.children[3].innerText;

    navigator.clipboard.writeText(serviceNumber);

    alert(
      "Service Number Copied"
    );
    

    totalCopyCount = totalCopyCount + 1;

    const copyCounters = document.querySelectorAll(".copy-count span");
    for (let i = 0; i < copyCounters.length; i++) {
      copyCounters[i].innerText = totalCopyCount;
    }

  }
});

getElement("cards-container").addEventListener("click", function (e) {
  if (e.target.className.includes("copy-number")) {
    const copyNumber = e.target;

    const copyEmergencyNumber = copyNumber.parentNode.children[3].innerText;
   

    navigator.clipboard.writeText(copyEmergencyNumber);

    alert(
      "Service Number Copied"
    );

  }
});



// Clear button

document.getElementById("btn-clear").addEventListener("click", function () {
  const historyList = document.getElementById("history-list");

  historyList.innerHTML = "";
  console.log("2nd click");
});