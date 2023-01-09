
$(function () { //prevents code from running prior to render/load
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. 

  // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
  function saveCalEvents() {
    const saveBtnEl = $(":button");
    // console.log(saveBtnEl);
    saveBtnEl.click(function (event) {
      // var nameVal = document.getElementById("name").value;
      // if (!leaderboardNames) {
      //   leaderboardNames = []
      // };
      // leaderboardNames.push({ nameVal, correct });
      let calEvents = [];
      const inputText = (event.currentTarget.parentElement.children[1].value.trim());
      const inputTime = (event.currentTarget.parentElement.id);
      calEvents.push({ inputText, inputTime });
      localStorage.setItem('calEvent', JSON.stringify(calEvents));
    })
  };


  //gary recommends that we use moment.js instead of day.js
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

  //
  // TODO: Add code to display the current date in the header of the page.

  const todayEl = $("#currentDay");
  console.log(todayEl);
  const today = moment().format("MMMM Do, YYYY");
  todayEl[0].innerHTML = today;
  console.log(today);
});


//make a moment object of the current day and time
//make a numeric value of the current hour (military time)
// hw sets up the full calendar structure in the html