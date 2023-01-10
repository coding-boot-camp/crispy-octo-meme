
$(function () { //prevents code from running prior to render/load

  let calEvents;

  function saveCalEvents() {
    const saveBtnEl = $(":button");
    saveBtnEl.click(function (event) {
      if (!calEvents) {
        calEvents = {};
      };
      const inputText = (event.currentTarget.parentElement.children[1].value.trim());
      const inputTime = (event.currentTarget.parentElement.id);
      calEvents[inputTime] = inputText;
      localStorage.setItem('calEvents', JSON.stringify(calEvents));
    })
  };

  saveCalEvents();

  var currentTime = moment().hour();

  function setCurrentTime(time) { //time is the method signature
    var timeEl = $(time);
    timeEl.addClass("present");
  };

  function setPastTime(time) { //time is the method signature
    var timeEl = $(time);
    timeEl.addClass("past");
  };

  function setFutureTime(time) { //time is the method signature
    var timeEl = $(time);
    timeEl.addClass("future");
  };

  // setCurrentTime(`#hour-${currentTime}`); //backticks act as quotations

  function setTimes(time) {
    if (time > currentTime) {
      setFutureTime(`#hour-${time}`);
    } else if (time < currentTime) {
      setPastTime(`#hour-${time}`);
    } else {
      setCurrentTime(`#hour-${time}`);
    }
  }

  var savedEvents = JSON.parse(localStorage.getItem('calEvents'));

  const possibleTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  for (var time of possibleTimes) {
    setTimes(time);
    // console.log(time);
    // console.log(savedEvents[`hour-${time}`]);
    // figure out how to get the key and tie it to the html id
    // savedEvents key 
    var targetTime = $(`#hour-${time}`);
    console.log(targetTime);
    // targetTime.textarea.innerhtml = savedEvents[`hour-${time}`]
  };

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // console.log(savedEvents["hour-10"]);



  // for (var entry of calEvents) {

  //   };const lB1 = document.createElement("li");
  //   entry.inputTime
  //   lB1.innerHTML = `${entry.inputText}`;
  // }

  // TODO: Add code to display the current date in the header of the page.
  const todayEl = $("#currentDay");
  const today = moment().format("MMMM Do, YYYY");
  todayEl[0].innerHTML = today;
});