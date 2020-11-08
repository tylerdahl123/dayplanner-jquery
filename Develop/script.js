var hours = [
    {
        hour: "08",
        ampm: "am",
    },
    {
        hour: "09",
        ampm: "am",
    },
    {
        hour: "10",
        ampm: "am",

    },
    {
        hour: "11",
        ampm: "am"
    },
    {
        hour: "12",
        ampm: "pm",
    },
    {
        hour: "01",
        ampm: "pm",

    },
    {
        hour: "02",
        ampm: "pm",
    },
    {
        hour:"03",
        ampm: "pm",
    },
    {
        hour: "04",
        ampm: "pm",
    },
    {
        hour: "05",
        ampm: "pm",
    },
    {
        hour: "06",
        ampm: "pm",
    },
]


hours.forEach(function(thisHour) {
    var hourRow = $("<form>").attr({
        class:"row"
    });
    $(".container").append(hourRow);
})

var hourField = $("<div>")
    hourField.text("${thisHour.hour}${thisHour.ampm}")
    hourField.attr({
        "class": "col-md-2 hour"
    });
    $(".container").append(hourField);
console.log(hourField);

var userInput = $("<textarea>");









function getHeaderDate () {
    var currentDate = moment().format("MMM Do YYYY");
    $("#currentDay").text(currentDate);
}

getHeaderDate();
