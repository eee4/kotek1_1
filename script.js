
function piszLiczby09() {
  const poleTekstowe = document.getElementById("ex1_content");
  var tablicaZLiczbami = [];
  for (let i = 0; i <= 9; i++) tablicaZLiczbami.push(i);
  poleTekstowe.innerText = tablicaZLiczbami.join(", ");
}

(function () {

  // Zad. 1_1: liczby 0-9
  const przycisk = document.getElementById("ex1_button");
  przycisk.addEventListener("click", piszLiczby09);

})();