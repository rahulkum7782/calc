  let display = document.getElementById("display");

    function press(value) {
      display.value += value;
    }

    function clearDisplay() {
      display.value = "";
    }
  function calculate() {
  try {
 
    let expression = display.value.replace(/(\d+)%/g, "($1/100)");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}