
//current day is displayed at the top of the calendar (in header element)

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//Function to save event entered in timeblock 

function saveEvent() {

    $(".time-block").each(function () {
        var timeOfday = $(this).attr("id");

        //even when user refreshes browser, planner entry remains 
        var taskEntry = localStorage.getItem(timeOfday);

        if (taskEntry !== null) {
            $(this).children(".eventLog").val(taskEntry);
        }
    });
}
//When user clicks calendar icon button
saveEvent();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var taskEntry = $(this).siblings(".eventLog").val();

    //event entered is then saved in local storage

    localStorage.setItem(time, taskEntry);
});

//Text area colour changes based on past, present and future

function colorChange() {
    //This sets the current hour for the day
    var currentHourdisplay = moment().hours();

    /*Each timeblock has an id indicating which hour it represents, 
    making it easy to compare the corresponding hour to the current hour
    */
    $(".time-block").each(function () {
        var currentHour = parseInt($(this).attr("id"));

        //Use the else if statement to specify a new condition if the first condition is false.

        //if hour on planner is current hour - apply CSS class present to show as red
        if (currentHour === currentHourdisplay) {
            $(this).addClass("present");
        }

        //if hour on planner is after current hour, apply CSS class future to show as green
        else if
            (currentHour > currentHourdisplay) {
            $(this).addClass("future")
        }
        //if hour on planner is before current hour (hours that have passed), apply CSS class past to show as grey

        else {
            $(this).addClass("past");
        }
    })
}

colorChange();











