
//current day is displayed at the top of the calendar (in header element)

const timeDate = document.getElementById("currentDay");
setInterval(() => {
    const current = moment();
    const displayTimeDate = current.format("dddd, MMMM Do YYYY");
   timeDate.textContent = displayTimeDate;
}, 1000);


//Timeblock changes based on past, present and future
//Past is grey

//Present is red


//Future is green


//Click save button to save event for selected timeblock
//saved in local storage



//when page is refreshed, saved events remain