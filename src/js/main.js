import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Supergalactic from './supergalactic.js';

$(document).on("click", ":submit", function(event){
  event.preventDefault();
  
  const age = $("#userInputAge").val();
  const supergalactic = new Supergalactic(age);
  // const supergalacticAge;
  const expectancy = $("#userInputExpectancy").val();
  const planet = $(this).val();
  const planetExpectancy = supergalactic.lifeExpectancy(age, expectancy, planet);

  $(".age").text(`On ${planet}, you would be PLANETAGE years old! People from ${planet} with your life expectancy usually live to around PLANETEXPECTANCY`);
  $(".planet").text(`This means, you have an estimated ${planetExpectancy} ${planet}-sized years left. Make 'em count!`);
  $(".life-expectancy").text(`${planetExpectancy}`);
});