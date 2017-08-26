 $(document).ready(function() {
    $("button").on("click", function() {
      console.log("Button clicked " + getRandomNumber (19, 120) );
    })
 })

 function getRandomNumber (min, max) {
    return Math.floor((Math.random() * (max - min + 1) ) + min);
};

// let's make some crystals

var crystalArray = [
  ["blue-gem", "./assets/images/blue-gem.jpg"], 
  ["green-gem", "./assets/images/green-gem.jpg"],  
  ["red-gem", "./assets/images/red-gem.jpg"],
  ["yellow-gem", "./assets/images/yellow-gem.jpg"]
  ];

for (var i = 0; i < crystalArray.length; i++) {
  var imageCrystal = $("<img>");
  imageCrystal.addClass("crystal-image crystal col-2");
  imageCrystal.attr("src", crystalArray[i][1]);
  imageCrystal.attr("alt", crystalArray[i][0]);
  imageCrystal.attr("data-crystalvalue", getRandomNumber(1, 12));
  $("#crystals").append(imageCrystal);
};