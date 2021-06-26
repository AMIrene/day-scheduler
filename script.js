
var currentHourdisplay = moment().hours();
//current day is displayed at the top of the calendar (in header element)

//Vanilla JS

// const timeDate = document.getElementById("currentDay");
// setInterval(() => {
//     const current = moment();
//     const displayTimeDate = current.format("dddd, MMMM Do YYYY");
//    timeDate.textContent = displayTimeDate;
// }, 1000);

//JQUERY

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//User clicks calendar icon to save event in timeblock jquery


function saveEvent() {

    $(".time-block").each(function () {
        var timeOfday = $(this).attr("id");
        var taskEntry = localStorage.getItem(timeOfday);

        if (taskEntry !== null) {
            $(this).children(".eventLog").val(taskEntry);
        }
    });
}

saveEvent();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var taskEntry = $(this).siblings(".eventLog").val();

    //event is then saved in local storage

    localStorage.setItem(time, taskEntry);
});

//Timeblock colour changes based on past, present and future

var currentHourdisplay = moment().hours();
console.log(currentHourdisplay);


}

//when the current time equals current time (currentHourDisplay), change textarea element to red



//for any hours from 9 am that have lapsed before the current time (currentHourDisplay), change textarea element to grey


//for any hours after current time (currentHourDisplay), change textarea element to green













