const display = document.getElementById("display");

function appendValue(val) {
  if (val === "π") display.value += Math.PI.toFixed(6);
  else if (val === "e") display.value += Math.E.toFixed(6);
  else display.value += val;
}

function appendFunction(func) {
  if (func === "sqrt") display.value += "√(";
  else if (func === "square") display.value += "^2";
  else if (func === "fact") display.value += "!";
  else display.value += func + "(";
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expr = display.value
      .replace(/π/g, Math.PI)
      .replace(/e/g, Math.E)
      .replace(/√\(/g, "Math.sqrt(")
      .replace(/sin\(/g, "Math.sin(")
      .replace(/cos\(/g, "Math.cos(")
      .replace(/tan\(/g, "Math.tan(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/exp\(/g, "Math.exp(")
      .replace(/\^/g, "**")
      .replace(/(\d+)!/g, (_, n) => factorial(Number(n)));

    display.value = eval(expr);
  } catch (e) {
    display.value = "Error";
  }
}

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
