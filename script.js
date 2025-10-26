
function piszLiczby09() {
  const poleTekstowe = document.getElementById("ex1_content");
  var tablicaZLiczbami = [];
  for (let i = 0; i <= 9; i++) tablicaZLiczbami.push(i);
  poleTekstowe.innerText = tablicaZLiczbami.join(", ");
}

function weryfikujNrTelefonu(evt) {
  const poleNrTelefonuText = document.getElementById("ex2_content");
  // - długość ≠ 9 → komunikat: „Długość numeru musi być równa 9”
  if (evt.currentTarget.value.length != 9) poleNrTelefonuText.innerText = "Długość numeru musi być równa 9";
  // - zawiera litery → „Numer nie może zawierać liter”
  else if (/([a-zA-Zęśąćźżłóń])+/.exec(evt.currentTarget.value) !== null) poleNrTelefonuText.innerText = "Numer nie może zawierać liter";
  // - zawiera znaki specjalne → „Numer nie może zawierać znaków specjalnych”
  else if (/([\+\-*()\[\]&^%$#@!{};:'",<.>\/?\\\|`~_=])+/.exec(evt.currentTarget.value) !== null)  poleNrTelefonuText.innerText = "Numer nie może zawierać znaków specjalnych";
  // - dokładnie 9 cyfr → „Numer telefonu jest poprawny”
  else if (/^(\d){9}$/.exec(evt.currentTarget.value) !== null && evt.currentTarget.value.length == 9) poleNrTelefonuText.innerText = "Numer telefonu jest poprawny";
  // w przeciwnym, nieprzewidzianym przypadku
  else poleNrTelefonuText.innerText = "Ten numer telefonu jest nieprawidłowy";
}

function dragstartHandler(evt) {
  // Przekaż potrzebne dane
  evt.dataTransfer.setData("text/html", evt.target.outerHTML);
  evt.dataTransfer.setData(   "parent", evt.target.parentElement.id);
}

function dropHandler(evt, src) {
  evt.preventDefault();
  const data = evt.dataTransfer.getData("text/html");
  // explicitly listen only for drop events from "ex3_one"
  // if (evt.dataTransfer.getData("parent") === "ex3_one") { // uncomment for 1_2.1
  if (1) { // 1_2.2
    src.innerHTML = "";
    evt.target.innerHTML = data;
  }
}

(function () {

  // Zad. 1_1.1: liczby 0-9
  const przycisk = document.getElementById("ex1_button");
  przycisk.addEventListener("click", piszLiczby09);

  // Zad. 1_1.2: weryfikacja numeru telefonu
  const poleNrTelefonu = document.getElementById("ex2_text");
  poleNrTelefonu.addEventListener("change", weryfikujNrTelefonu);

  // Zad. 1_2.1, 1_2.2: przenoszenie w jedną/obie strony
  const source = document.getElementById("ex3_one");
  const target = document.getElementById("ex3_two");

  source.addEventListener("dragstart", dragstartHandler);
  target.addEventListener("dragstart", dragstartHandler);
  source.addEventListener( "dragover", (evt) => evt.preventDefault());
  source.addEventListener(     "drop", (evt) => dropHandler(evt, target));
  target.addEventListener( "dragover", (evt) => evt.preventDefault());
  target.addEventListener(     "drop", (evt) => dropHandler(evt, source));

})();