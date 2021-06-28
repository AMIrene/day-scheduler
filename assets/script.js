
//DOM element: save button for saving task entry
var saveBtn = $(".saveBtn");


//current day is displayed at the top of the calendar (in header element)
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//Function to save task entered in timeblock 

function saveEvent() {

    $(".time-block").each(function () {
        var timeOfday = $(this).attr("id");

        //even when user refreshes browser, planner entry remains 
        var taskEntry = localStorage.getItem(timeOfday);

        if (taskEntry) {
            $(this).children(".eventLog").val(taskEntry);
        }
    });
}
//When user clicks calendar icon button, it saves entry and logs in local storage
saveEvent();

saveBtn.on("click", function () {
    var timeBlock = $(this).parent().attr("id");
    var taskEntry = $(this).siblings(".eventLog").val();

    //event entered is then saved in local storage

    localStorage.setItem(timeBlock, taskEntry);
});

//Text area colour changes based on past, present and future

function colorChange() {
    //This sets the current hour for the day
    var currentHourdisplay = moment().hours();

    /*Each timeblock has an id indicating which hour it represents, 
    making it easy to compare the corresponding hour to the current hour using integer
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











