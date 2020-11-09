var days = [
    {
        hour: "08 :",
        ampm: "am",
        id: "0",
    },
    {
        hour: "09 : ",
        ampm: "am",
        id: "1",
    },
    {
        hour: "10 : ",
        ampm: "am",
        id: "2",

    },
    {
        hour: "11 : ",
        ampm: "am",
        id: "3",
    },
    {
        hour: "12 : ",
        ampm: "pm",
        id: "4",
    },
    {
        hour: "01 : ",
        ampm: "pm",
        id: "5",

    },
    {
        hour: "02 : ",
        ampm: "pm",
        id: "6",
    },
    {
        hour:"03 : ",
        ampm: "pm",
        id: "7",
    },
    {
        hour: "04 : ",
        ampm: "pm : ",
        id: "8",
    },
    {
        hour: "05 : ",
        ampm: "pm",
        id: "9",
    },
    {
        hour: "06 : ",
        ampm: "pm",
        id: "10",
    },
]

function getHeaderDate () {
    var currentDate = moment().format("MMM Do YYYY");
    $("#currentDay").text(currentDate);
}

function saveReminders (){
    localStorage.setItem("days", JSON.stringify(days));//putting my 
}


function displayReminders() {
    days.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

function init () {
    var storedDay = JSON.parse(localStorage.getItem("days"));
    if (storedDay) {
        days = storedDay;
    }
    saveReminders();
    displayReminders();
}
getHeaderDate();

days.forEach(function(thisHour)//creating a row for each of my hours in my days //
 {
    var hourRow= $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hourRow);


var hourField = $("<div>")//creating a new div for my hours..//
.text(days.hour + days.ampm)//backtics or the grave accent allows you concatentate parts into a single string...(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
.attr({
    "class": "col-md-2 hour"
});


var hourPlan = $("<div>")
.attr ({
    "class": "col-md-9 description p-0"//using some good ole fashion columns to get the hours over where 
});


var saveButton = $("<i></i>")
var savePlan = $("<button>")
.attr ({
    "class": "col-md-1 saveBtn"

});

savePlan.append(saveButton);
hourRow.append(hourField,hourPlan,savePlan);
})

init();









