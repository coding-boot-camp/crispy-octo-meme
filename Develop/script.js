// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var saveButton = $('.saveBtn')
$('#currentDay').text(today.format('MMM D, YYYY'));

$(function () {

saveButton.on('click' , function () {
  var hour = 0;
  for (var i = 0; i < saveButton.length; i++) {
    if (this === saveButton[i]) {
      hour = i;
    }

  }

if (hour < 4) {
  hour+=9;
}
else {
  hour+=9;
  hour-=12;
}




var hourElement = '#hour-' + hour;
var el = $(hourElement).children()[1].value; // Takes the element and stores in in local storage

localStorage.setItem(hour , el);
const cat = localStorage.getItem(hour);

var rightNow = dayjs().hour();
console.log(rightNow);
$(hourElement).children()[1].value = cat;
// console.log(cat);







})
$('#hour-9').children()[1].value = localStorage.getItem(9);
$('#hour-10').children()[1].value = localStorage.getItem(10);
$('#hour-11').children()[1].value = localStorage.getItem(11);
$('#hour-12').children()[1].value = localStorage.getItem(12);
$('#hour-1').children()[1].value = localStorage.getItem(1);
$('#hour-2').children()[1].value = localStorage.getItem(2);
$('#hour-3').children()[1].value = localStorage.getItem(3);
$('#hour-4').children()[1].value = localStorage.getItem(4);
$('#hour-5').children()[1].value = localStorage.getItem(5);

var value = 9;

var rightNow = dayjs().hour();





for(var i = 0; i < 9; i++) {

  if (rightNow > value) {

    var temp = value;       // Functionality to convert 24 hour time to 12 hour time
    if (value > 12) {       //
      temp = value - 12;    //
    }                       //
    $('#hour-' + temp).addClass('past')

  }
  else if (rightNow == value ) {

    var temp = value;       // Functionality to convert 24 hour time to 12 hour time
    if (value > 12) {       //
      temp = value - 12;    //
    }                       //
    $('#hour-' + temp).addClass('present')

  }
  else {

    var temp = value;
    if (value > 12) {
      temp = value - 12;
    }
    $('#hour-' + temp).addClass('future')

  }
  value++;
}



});
