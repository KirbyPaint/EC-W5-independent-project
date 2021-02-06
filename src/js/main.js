import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Supergalactic from './supergalactic.js';

$(document).on("click", ":submit", function(event){
  event.preventDefault();
  
  const age = $("#userInputAge").val(); // Number value containing the user-inputted age
  const supergalactic = new Supergalactic(age); // Object with the user's age that can have methods called on it
  const expectancy = $("#userInputExpectancy").val(); // Number value containing the user-inputted age
  const supergalacticExpectancy = new Supergalactic(expectancy); // Object with the user's life expectancy that can have methods called on it
  const planet = $(this).val(); // Variable containing the chosen planet, as a string
  let planetAge = 0; // Used later
  let planetExpectancy = 0; // Used later
  const planetYearsRemaining = supergalactic.lifeExpectancy(age, expectancy, planet); ///  Variable that currently either returns the user's life expectancy or years lived past the expectancy. This is a bad function right now. This should be two things.

  switch (planet) {
  case "Mercury": // Each planet case basically just converts user-inputted values into their corresponding planet numbers
  // Takes in the blank planet ages it got earlier.
    planetAge = supergalactic.mercury();
    planetExpectancy = supergalacticExpectancy.mercury();
    break;
  case "Venus":
    planetAge = supergalactic.venus();
    planetExpectancy = supergalacticExpectancy.venus();
    break;
  case "Mars":
    planetAge = supergalactic.mars();
    planetExpectancy = supergalacticExpectancy.mars();
    break;
  case "Jupiter":
    planetAge = supergalactic.jupiter();
    planetExpectancy = supergalacticExpectancy.jupiter();
    break;
  }

  $(".main").text(`On ${planet}, you would be ${planetAge} years old! People from ${planet} with your life expectancy usually live to around ${planetExpectancy} years old.`);
  if (planetExpectancy < planetAge) { // If the age has surpassed life expectancy
    $(".alt").text(`This means, you've lived ${planetYearsRemaining} year(s) longer than expected for ${planet}. You've lived long, now go and prosper!`);
  } else {
    $(".alt").text(`This means, you have an estimated ${planetYearsRemaining} ${planet}-sized years left. Make 'em count!`);
  }
});