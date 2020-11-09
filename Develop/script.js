var days = [
    {
        hour: "08",
        ampm: "am",
        id: "0",
    },
    {
        hour: "09",
        ampm: "am",
        id: "1",
    },
    {
        hour: "10",
        ampm: "am",
        id: "2",

    },
    {
        hour: "11",
        ampm: "am",
        id: "3",
    },
    {
        hour: "12",
        ampm: "pm",
        id: "4",
    },
    {
        hour: "01",
        ampm: "pm",
        id: "5",

    },
    {
        hour: "02",
        ampm: "pm",
        id: "6",
    },
    {
        hour:"03",
        ampm: "pm",
        id: "7",
    },
    {
        hour: "04",
        ampm: "pm",
        id: "8",
    },
    {
        hour: "05",
        ampm: "pm",
        id: "9",
    },
    {
        hour: "06",
        ampm: "pm",
        id: "10",
    },
]

function getHeaderDate () {
    var currentDate = moment().format("MMM Do YYYY");
    $("#currentDay").text(currentDate);
}


getHeaderDate();

days.forEach(function(thisHour) {
    var hourRow= $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);


var hourField = $("<div>")
.text("${thisHour.hour}${thisHour.meridiem})
.attr({
    "class": "col-md-2 hour"
});
})


var hourPlan = $("<div>")
.attr ({
    "class": "col-md-9 description p-0"
});





