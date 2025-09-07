console.log("main.js");
(() => {
  console.log("Here we are!");
  window.addEventListener("load", (event) => {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");
    const operation = document.getElementById("operation");
    const result = document.getElementById("result");

    const update = () => {
      product.innerHTML =
        parseFloat(multiplier.value) * parseFloat(multiplicand.value);
    };

    multiplier.addEventListener("input", update);
    multiplicand.addEventListener("input", update);
  });
})();
