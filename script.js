

//current day is displayed at the top of the calendar (in header element)

//Vanilla JS

// const timeDate = document.getElementById("currentDay");
// setInterval(() => {
//     const current = moment();
//     const displayTimeDate = current.format("dddd, MMMM Do YYYY");
//    timeDate.textContent = displayTimeDate;
// }, 1000);

//JQUERY

let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));

//Timeblock changes based on past, present and future
//Past is grey

//Present is red



//Future is green

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












//User clicks calendar icon button to save event in timeblock vanilla js
// function saveEvent(event) {
//     event.preventDefault();
//     console.log(event)

// const element = event.target;
// console.log(element.dataset.time);

// }
// saveBtnEls.forEach(function (element){
//     element.addEventListener('click', saveEvent)

// });



//saved in local storage



//when page is refreshed, saved events remain