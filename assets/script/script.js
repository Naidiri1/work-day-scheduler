
$(document).ready(function () {
$(".saveBtn").click(function(){
var saveAppoinment = $(this).siblings(".userInput").val();
var timeId = $(this).parent().attr("id");
localStorage.setItem(saveAppoinment, timeId);

$(".notification").addClass("show");
setTimeout(function () {
    $('.notification').removeClass("show");
  }, 3000);

});
var updatinghr = function(){
currentTime;

$(".time-block").each(function(){



});

}

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



})
   //date using js 
    var currentDate = dayjs().format("dddd MMMM DD, YYYY")
    $ ("#currentDay").text(currentDate);
//set interval for the time display on the screen 
  setInterval (function(){
  var currentTime= dayjs().format("hh:mm:ss a");
  $ ("#time").text(currentTime);
  }, 1000);