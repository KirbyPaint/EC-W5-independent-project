import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
// import Supergalactic from './supergalactic.js';

$(document).on("click", ":submit", function(event){
  event.preventDefault();

  const age = $("#userInputAge").val();
  // const x = new Supergalactic(age);
  // alert($(this).val());
  alert(age);
});