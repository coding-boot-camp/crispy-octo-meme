// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id"); 
    var textAreaValue = $(this).siblings(".description").val(); 
    localStorage.setItem(timeBlockId, textAreaValue);
  });
  function updateColors() {
    var currentHour = dayjs().format('H'); 

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]); 

      $(this).removeClass("past present future");
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour == currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  updateColors(); 
  $(".description").each(function () {
    var timeBlockId = $(this).parent().attr("id"); 
    var savedText = localStorage.getItem(timeBlockId); 
    if (savedText) {
      $(this).val(savedText); 
    }
  });

  var currentDate = dayjs().format('MMMM DD, YYYY');
  $("#currentDay").text(currentDate);
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  var saveButtons = document.getElementsByClassName("saveBtn")
  var timeDisplayEl = $('#time-display');

  function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

  function saveText() {
    var textAreaValue = this.parentNode.querySelector(".description").value;
    var savedDescriptions = JSON.parse(localStorage.getItem("savedDescriptions")) || [];
    var index = Array.from(this.parentNode.parentNode.children).indexOf(this.parentNode);
    
    if (savedDescriptions[index]){
      savedDescriptions[index] = textAreaValue;
    } else {
      savedDescriptions.push(textAreaValue);
    }
    localStorage.setItem("savedDescriptions", JSON.stringify(savedDescriptions));
    console.log("Text saved:", textAreaValue);
    // console.log('clicked');
    // console.log(el)
  }

  window.onload = function () {
    var saveButtons = document.getElementsByClassName("saveBtn");
    for (var i = 0; i < saveButtons.length; i++) {
      saveButtons[i].addEventListener("click", saveText);
    }

  // window.onload = function() {
  //   var savedDescriptions = JSON.parse(localStorage.getItem("savedDescriptions")) || [];
  //   if (savedDescriptions.length > 0) {
  //     var textAreas = document.getElementsByClassName("description");
  //   for (var i = 0; i < textAreas.length; i++) {
  //     textAreas[i].value = savedDescriptions[i] || "";
  //     }
  //   }
  

  var saveButtons = document.getElementsByClassName("saveBtn");
  for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener("click", saveText);
  }
};

displayTime();
setInterval(displayTime, 1000);

  // saveButtons.addEventListener("click", saveText);
  //
  // TODO: Add code to display the current date in the header of the page.
// });
