import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
// import Supergalactic from './supergalactic.js';

$("form").submit(function(event) {
  event.preventDefault();
  $("#output").append("BUTTON SUBMIT CONFIRMED");
});