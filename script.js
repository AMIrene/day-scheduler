const timeDate = document.getElementById("currentDay");
setInterval(() => {
    const current = moment();
    const displayTimeDate = current.format("dddd, MMMM Do YYYY");
   timeDate.textContent = displayTimeDate;
}, 1000);