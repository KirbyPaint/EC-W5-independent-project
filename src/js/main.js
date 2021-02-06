import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Supergalactic from './supergalactic.js';

$(document).on("click", ":submit", function(event){
  event.preventDefault();
  
  const age = $("#userInputAge").val();
  const supergalactic = new Supergalactic(age);
  const expectancy = $("#userInputExpectancy").val();
  const planet = $(this).val();
  const planetExpectancy = supergalactic.lifeExpectancy(age, expectancy, planet);

  $(".age").text(`${supergalactic.age}`);
  $(".planet").text(`${planet}`);
  $(".life-expectancy").text(`${planetExpectancy}`);
});