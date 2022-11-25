//date format
var currentDate = dayjs().format("dddd MMMM DD, YYYY");

$("#currentDay").text(currentDate);
//set interval for the time display on the screen with h/m/s
setInterval(function () {
  var currentTime = dayjs().format("hh:mm:ss a");
  $("#time").text(currentTime);
}, 1000);

$(".time-block").each(function () {
  // This is the current hour in military time
  var currentHour = dayjs().hour();
  // this gets the id number from 8-16 hr 
  var timeBlocker = parseInt($(this).attr("id").split("-")[1]);
  if (timeBlocker < currentHour) {
    $(this).addClass('past')
  } else if (timeBlocker == currentHour) {
    $(this).addClass('present')
  } else {
    $(this).addClass('future')
  }
});
// loops through the hr 8-16 in the schedule 
function getStorage() {
  for (let index = 8; index < 17; index++) {
    $(`#text-${index}`).text(localStorage.getItem(`hour-${index}`))
  }
};
// users input saved in the local storage with a function on an hr button 
$(document).ready(function () {
  $(".saveBtn").click(function () {

    var saveAppoinment = $(this).siblings(".userInput").val();
    var timeId = $(this).parent().attr("id");
    localStorage.setItem(timeId, saveAppoinment);

  //adding a notification when the input is saved in local storage displayed for 3 seconds 

    document.getElementById("notify").style.display = "block";
    setTimeout (function (){
     document.getElementById("notify").style.display = "none";
    },3000);
  });
});

getStorage();
