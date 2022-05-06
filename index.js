btn.addEventListener("click", function() {
  let btn = document.getElementById("btn");
  var nbPhotocopies = document.getElementById("nombre").value;
  calcul(nbPhotocopies)
});

function calcul(nbPhotocopies) {

  var prix = 0
  var prixTotal = 0

  if (nbPhotocopies <= 10) {
    prix = 0.10
    prixTotal = nbPhotocopies * prix
  }
  if (nbPhotocopies > 10 && nbPhotocopies <= 30) {
    var dixPremieresPhotocopies = 1
    prix = 0.09
    nbPhotocopies = nbPhotocopies - 10
    prixTotal = nbPhotocopies * prix + dixPremieresPhotocopies
  }
  if (nbPhotocopies > 30) {
    prix = 0.08
    nbPhotocopies = nbPhotocopies - 30
    prixTotal = nbPhotocopies * prix + 2.80
  }
  document.getElementById("result").innerHTML = "Le prix des photocopies est: " + (Math.round(prixTotal * 100) / 100) + " euros ";
}
