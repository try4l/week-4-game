// button for test - make invisible for production code
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
 

var game = {
  // --
  // Define the properties of the game here
  // --
  wins: 0,
  losses: 0,
  counter: 0,
  targetScore: 0,

  // --
  // Define the functions of the game here
  // Are there any re-usable operations that you can break out into a function so you don't write the same code twice?
  // --
  initialize: function() {
    // Function for initializing the game object.  Tasks to run when the game first starts up
    console.log("Initializing the Game");
    this.wins = 0;
    this.losses = 0;
    this.counter = 0;
    this.reset();    
  },

  reset: function() {
    // Reset current game - tasks to perform after the user wins or loses
    console.log("Resetting the Game Properties");
    this.counter = 0;
    this.targetScore = getRandomNumber(19, 120);

   
    this.showData();
  },

  processMove: function(move) {
    console.log("Processing Move");
    console.log("Move: ", move);

    // process the user move and check for the end of game
    this.counter += move;

    console.log("New score: " + this.counter);

    if (this.counter ===this.targetScore) {
      this.wins++;
      alert("Congratulations: You WIN!!!");
      this.reset();
    }
    else if (this.counter >= this.targetScore) {
      alert("Sorry: You lose.");
      this.losses++;
      this.reset();
    }
    this.showData();
  },

  showData: function() {
    console.log(this);
  },

};

// Outside of game object... code is loading.. initialize game.
var updateGameDisplay = function (game) {
    console.log("Update Game Display");
    console.log ("game.target-score, score, wins, losses: ", game.target-score, game.score, game.wins, game.losses);


    $("#target-score").html(game.targetScore);
    $("#score").html(game.counter);
   
    $("#wins").html("Wins: " + game.wins);    
    $("#losses").html("Losses: " + game.losses);

    game.showData();
};


game.initialize();


$(".crystal-image").on("click", function() {
  console.log("click");
  console.log("imageCrystal: ", imageCrystal);
  game.showData();
  var crystalValue = ($(this).attr("data-crystalvalue"));
  crystalValue = parseInt(crystalValue);
  console.log("crystalValue: ", crystalValue);
  // Call function on game object to update the game logic
  game.processMove(crystalValue);
  // Call function (not on the game object) to update the page elements.  
  // Elements are updated from the properties of the game object
  updateGameDisplay(game); 
});
