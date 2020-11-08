function getHeaderDate () {
    var currentDate = moment().format("MMM Do YY");
    $("#currentDay").text(currentDate);
}console.log(getHeaderDate());

getHeaderDate();
