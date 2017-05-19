$(document).ready(function() {
	$('.box').hide()
	$('.one').show()
});

var score = 0;
document.getElementById("myLink").innerHTML = score;

$('.one').on('click', function(event) {

  var things = ['one', 'two', 'three', 'four']
  var thing = things[Math.floor(Math.random()*things.length)];

	$('.one').toggle();
  $('.'+thing).toggle();

  score++;
  document.getElementById("myLink").innerHTML = score;
});

$('.two').on('click', function(event) {

  var things = ['one', 'two', 'three', 'four']
  var thing = things[Math.floor(Math.random()*things.length)];

  $('.two').toggle();
  $('.'+thing).toggle();

  score++;
  document.getElementById("myLink").innerHTML = score;
})

$('.three').on('click', function(event) {

  var things = ['one', 'two', 'three', 'four']
  var thing = things[Math.floor(Math.random()*things.length)];

  $('.three').toggle();
  $('.'+thing).toggle();

  score++;
  document.getElementById("myLink").innerHTML = score;
})

$('.four').on('click', function(event) {

  var things = ['one', 'two', 'three', 'four']
  var thing = things[Math.floor(Math.random()*things.length)];

  $('.four').toggle();
  $('.'+thing).toggle();

  score++;
  document.getElementById("myLink").innerHTML = score;
})
