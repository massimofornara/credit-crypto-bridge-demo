const rates = {
  ETH: 3500,
  USDC: 1,
  USDT: 1
};

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = Number(document.getElementById("amount").value);
  const out = document.getElementById("out");
  if (!amount || amount <= 0) {
    out.hidden = false;
    out.textContent = "Inserisci un importo valido.";
    return;
  }
  const usd = amount * rates[from];
  const recv = usd / rates[to];
  out.hidden = false;
  out.innerHTML =
    "<strong>Stima didattica:</strong> " +
    amount + " " + from + " ≈ " + recv.toFixed(6) + " " + to +
    "<br/>Non è un prezzo di off-ramp. Non c'è settlement fiat. " +
    "Per un bridge reale serve clientId thirdweb e liquidità di mercato.";
});
