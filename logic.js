var initialPrice = document.querySelector("#initial-price");
// var stockQuantity = document.querySelector("#stock-quantity");
var sellingPrice = document.querySelector("#selling-price");
var submitButton = document.querySelector("#submitButton");
var outpuText = document.querySelector("#output-text");

var errorMessageIp = document.querySelector("#iptext");
var errorMessageSp = document.querySelector("#sptext");
// var errorMessageQty = document.querySelector("#quantityText");
var profitImage = document.querySelector("#profit-image");
var lossImage = document.querySelector("#loss-image");
var stagnantImage = document.querySelector("#stagnant-image");
submitButton.addEventListener("click", submitHandler);
// console.log(profitImage);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var sp = Number(sellingPrice.value);
  // var qty = Number(stockQuantity.value);
  console.log(ip);
  if (ip === 0) {
    errorMessageIp.style.display = "block";
  } else {
    errorMessageIp.style.display = "none";
  }
  if (sp === 0) {
    errorMessageSp.style.display = "block";
  } else {
    errorMessageSp.style.display = "none";
  }
  // if (qty === 0) {
  //   errorMessageQty.style.display = "block";
  // } else {
  //   errorMessageQty.style.display = "none";
  // }

  calculateStockGrowth(ip, sp);
}

function calculateStockGrowth(ipValue, spValue) {
  if (spValue > ipValue) {
    var profit = calculateProfit(spValue, ipValue);
    var profitPercentage = (profit / ipValue) * 100;
    profitImage.style.display = "block";
    lossImage.style.display = "none";
    stagnantImage.style.display = "none";

    showMessage(
      `Yay! you have gained a profit of ${profit} and profit percentage of ${profitPercentage.toFixed(
        2
      )}%`
    );
  } else if (ipValue > spValue) {
    var loss = calculateLoss(ipValue, spValue);
    var lossPercentage = (loss / ipValue) * 100;
    profitImage.style.display = "none";
    lossImage.style.display = "block";
    stagnantImage.style.display = "none";

    showMessage(
      `Whoops! you have suffered a loss of ${loss} and profit percentage of ${lossPercentage.toFixed(
        2
      )}%`
    );
  } else if (ipValue === 0 || spValue === 0) {
    showMessage("Input fields need to be filled properly to see growth");
  } else {
    profitImage.style.display = "none";
    lossImage.style.display = "none";
    stagnantImage.style.display = "block";
    showMessage(
      "Growth is stagnant, you have neither gained profit nor suffered loss"
    );
  }
}
function calculateProfit(sellingPrice, costPrice) {
  var profit = Number(sellingPrice) - Number(costPrice);
  return profit;
}

function calculateLoss(costPrice, sellingPrice) {
  var loss = Number(costPrice) - Number(sellingPrice);
  return loss;
}

function showMessage(message) {
  outpuText.innerText = message;
}
