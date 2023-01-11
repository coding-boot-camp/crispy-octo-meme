
$(function () { //prevents code from running prior to render/load

  let calEvents = JSON.parse(localStorage.getItem('calEvents')); // sets this var to local storage so it doesn't overwrite what is already in local storage

  if (!calEvents) { // checks to see if there is anything in local storage first
    calEvents = {}; // creates an object for local strorage if none exists
  };

  // save events to local storage ---------------------------------------------------
  const saveBtnEl = $(":button");
  saveBtnEl.click(function (event) {
    const inputText = (event.currentTarget.parentElement.children[1].value.trim()); // user input text
    const inputTime = (event.currentTarget.parentElement.id); // grabs the time block for user input
    calEvents[inputTime] = inputText; // ties the time block to the input text
    localStorage.setItem('calEvents', JSON.stringify(calEvents)); // sets it to local storage
  })

    // apply correct class to timeslot ---------------------------------------------------

  var currentTime = moment().hour(); // determines current time

  function setCurrentTime(time) { //time is the method signature
    var timeEl = $(time);
    timeEl.addClass("present");
  };

  function setPastTime(time) { 
    var timeEl = $(time);
    timeEl.addClass("past");
  };

  function setFutureTime(time) { 
    var timeEl = $(time);
    timeEl.addClass("future");
  };

  function setTimes(time) { // this function sets the class by time of day
    if (time > currentTime) {
      setFutureTime(`#hour-${time}`); //backticks act as quotations
    } else if (time < currentTime) {
      setPastTime(`#hour-${time}`);
    } else {
      setCurrentTime(`#hour-${time}`);
    }
  }

   // pull text from local storage and set to correct timeslot-------------------------------------

  const possibleTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17]; // sets the text input to the correct timeslot from local storage
  for (var time of possibleTimes) {
    setTimes(time);
    var targetTime = $(`#hour-${time}`);
    var targetTextArea = targetTime.find('textarea');
    targetTextArea.val(calEvents[`hour-${time}`]);
  };

// sets date at top -------------------------------------

  const todayEl = $("#currentDay");
  const today = moment().format("MMMM Do, YYYY");
  todayEl[0].innerHTML = today;
});
