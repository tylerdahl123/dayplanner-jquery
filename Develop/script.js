var days = [
    {
        hour: "08 :",
        ampm: "am",
        id: "0",
        reminder:""
    },
    {
        hour: "09 : ",
        ampm: "am",
        id: "1",
        reminder: "",
    },
    {
        hour: "10 : ",
        ampm: "am",
        id: "2",
        reminder: "",

    },
    {
        hour: "11 : ",
        ampm: "am",
        id: "3",
        reminder: "",
    },
    {
        hour: "12 : ",
        ampm: "pm",
        id: "4",
        reminder: "",
    },
    {
        hour: "01 : ",
        ampm: "pm",
        id: "5",
        reminder: "", 

    },
    {
        hour: "02 : ",
        ampm: "pm",
        id: "6",
        reminder: "",
    },
    {
        hour:"03 : ",
        ampm: "pm",
        id: "7",
        reminder: "",
    },
    {
        hour: "04 : ",
        ampm: "pm : ",
        id: "8",
        reminder: "",
        },
    {
        hour: "05 : ",
        ampm: "pm",
        id: "9",
        reminder: "",
    },
    {
        hour: "06 :",
        ampm: "pm",
        id: "10",
        reminder: "" 
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

.text(`${thisHour.hour}${thisHour.ampm}`)//backtics or the grave accent allows you concatentate parts into a single string...(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


.attr({
    "class": "col-md-2 hour"
});


var hourPlan = $("<div>")
.attr ({
    "class": "col-md-9 description p-0"//using some good ole fashion columns to get the hours over where 
});


var planData = $("<textarea>");
    hourPlan.append(planData);
    planData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        planData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        planData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        planData.attr({
            "class": "future"
        })
    }
var saveButton = $("<i></i>")
var savePlan = $("<button>")
.attr ({
    "class": "col-md-1 saveBtn"

});

savePlan.append(saveButton);
hourRow.append(hourField,hourPlan,savePlan);
})

init();







