document.addEventListener("DOMContentLoaded", (event) => {
  const display = document.getElementById("display");
  const buttons = Array.from(document.querySelectorAll('input[type="button"]'));

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.id === "ac") {
        display.value = "";
      } else if (e.target.id === "de") {
        display.value = display.value.slice(0, -1);
      } else if (e.target.id === "percent") {
        display.value += "%";
      } else if (e.target.id === "divide") {
        display.value += "/";
      } else if (e.target.id === "multiply") {
        display.value += "*";
      } else if (e.target.id === "subtract") {
        display.value += "-";
      } else if (e.target.id === "add") {
        display.value += "+";
      } else if (e.target.id === "dot") {
        display.value += ".";
      } else if (e.target.id === "equals") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      } else {
        display.value += e.target.value;
      }
    });
  });
});
