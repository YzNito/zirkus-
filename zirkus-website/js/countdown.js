/* Countdown bis zur Premiere (Kür). Die Seite funktioniert auch ohne. */
(function () {
  var feld = document.getElementById("countdown");
  if (!feld) {
    return;
  }
  var ziel = new Date(feld.getAttribute("data-ziel"));
  var heute = new Date();
  var tage = Math.ceil((ziel - heute) / (1000 * 60 * 60 * 24));
  if (isNaN(tage)) {
    return;
  }
  if (tage > 1) {
    feld.textContent = "Noch " + tage + " Tage bis zur Premiere!";
  } else if (tage === 1) {
    feld.textContent = "Morgen ist Premiere!";
  } else if (tage === 0) {
    feld.textContent = "Heute ist Premiere – Manege frei!";
  } else {
    feld.textContent = "Die Saison läuft – wir sehen uns im Zelt!";
  }
})();
