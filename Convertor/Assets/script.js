document.getElementById("frm").addEventListener("submit", (e) => {
  e.preventDefault();
  const Inch = document.querySelector("#formGroupExampleInput");
  const inch = Number(Inch.value);
  const centemeter = inch * 2.54;
  const centemeterresult = document.querySelector("#inc");
  centemeterresult.innerText = " " + centemeter.toFixed(2);
  Inch.value = "";

  const Faran = document.getElementById("formGroupExampleInput2");
  const celsius = Number(Faran.value);
  const Fahrenheit = celsius * 1.8 + 32;
  const Fahrenheitresult = document.getElementById("faran");
  Fahrenheitresult.innerText = " " + Fahrenheit.toFixed(2);
  Faran.value = "";
});
