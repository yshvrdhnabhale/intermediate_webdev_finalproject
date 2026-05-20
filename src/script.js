function calculateSimpleInterest(principal, rate, time) {
  principal = Number(principal);
  rate = Number(rate);
  time = Number(time);
  const interest = (principal * rate * time) / 100;
  const total = principal + interest;
  return { interest: interest.toFixed(2), total: total.toFixed(2) };
}
function calculateCompoundInterest(principal, rate, time) {
  principal = Number(principal);
  rate = Number(rate);
  time = Number(time);
  const total = principal * Math.pow(1 + rate / 100, time);
  const interest = total - principal;
  return { interest: interest.toFixed(2), total: total.toFixed(2) };
}
function calculateInterest() {
  const principal = Number(document.getElementById("principal").value);
  const rate = Number(document.getElementById("rate").value);
  const time = Number(document.getElementById("time").value);
  const type = document.getElementById("type").value;
  const resultDiv = document.getElementById("result");
  if (!principal || !rate || !time) {
    resultDiv.innerHTML = "Please fill in all fields.";
    resultDiv.classList.add("show");
    return;
  }
  let result = type === "simple"
    ? calculateSimpleInterest(principal, rate, time)
    : calculateCompoundInterest(principal, rate, time);
  resultDiv.innerHTML = "<p>Interest: <strong>$" + result.interest + "</strong></p><p>Total: <strong>$" + result.total + "</strong></p>";
  resultDiv.classList.add("show");
}
if (typeof module !== "undefined") {
  module.exports = { calculateSimpleInterest, calculateCompoundInterest };
}
