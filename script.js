// var thisDate = $("#currentDay");
var plannerBox = document.getElementById("planner-box")
// todaysDate.text(moment().format("dddd, MMMM, Do YYYY"));



var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]


for (var i = 0; i < timeOfDay.length; i++) {
var timeRow = $("<div>");
timeRow.addClass("row time-block");

var thisHour = $("<div>");
thisHour.addClass("hour col-1");
timeRow.append(thisHour);

var textArea = $("<textarea>");
textArea.addClass("past description col-10");
timeRow.append(textArea);

var saveButton = $("<button>");
saveButton.addClass("saveBtn col-1");
timeRow.append(saveButton);

$(".container").append(timeRow);

}