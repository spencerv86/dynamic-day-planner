var thisDate = $("#current-date");
var plannerBox = document.getElementById("planner-box")
thisDate.text(moment().format("dddd, MMMM, Do YYYY"));
var currentHour = moment().format('H');
console.log(currentHour);



var timeOfDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];  


for (var i = 0; i < timeOfDay.length; i++) {
var timeRow = $("<div>");
timeRow.addClass("row time-block");

var thisHour = $("<div>");
thisHour.addClass("hour col-1 time-block");
if (parseInt(timeOfDay[i]) >= 13) {
    thisHour.text((parseInt(timeOfDay[i]) - 12) + " pm");
} else if (parseInt(timeOfDay[i]) <= 12) {
    thisHour.text(parseInt(timeOfDay[i]) + " am");
}
timeRow.append(thisHour);

var textArea = $("<textarea>");
textArea.addClass("description col-10");
if (parseInt(currentHour) === parseInt(timeOfDay[i])) {
    textArea.addClass("present");
} else if (parseInt(currentHour) > parseInt(timeOfDay[i])) {
    textArea.addClass("past");
} else if (parseInt(currentHour) < parseInt(timeOfDay[i])) {
    textArea.addClass("future");
}
textArea.attr("id", timeOfDay[i]);
timeRow.append(textArea);

var saveButton = $("<button>");
saveButton.addClass("saveBtn col-1");
saveButton.attr("data-r", timeOfDay[i])
saveButton.text("Save Here");
timeRow.append(saveButton);

$(plannerBox).append(timeRow);
}



$(document).on("click", function(event) {
    if ($(event.target).attr("class") === "saveBtn col-1"){
    var buttonData = $(event.target).attr("data-r");
    console.log($("#" + buttonData).val());
    var plans = $("#" + buttonData).val();
    }
    
    localStorage.setItem($())
})
