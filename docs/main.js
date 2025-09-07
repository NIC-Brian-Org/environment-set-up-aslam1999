console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", (event) => {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");

    const update = () => {
      const num1 = parseFloat(number1.value);
      const num2 = parseFloat(number2.value);
      let output;

      switch (operation.value) {
        case "add":
          output = num1 + num2;
          break;
        case "subtract":
          output = num1 - num2;
          break;
        case "multiply":
          output = num1 * num2;
          break;
        case "divide":
          output = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
          break;
        default:
          output = "Invalid operation";
      }

      result.innerHTML = isNaN(output) ? "Invalid input" : output;
    };

    number1.addEventListener("input", update);
    number2.addEventListener("input", update);
    operation.addEventListener("change", update);
  });
})();
