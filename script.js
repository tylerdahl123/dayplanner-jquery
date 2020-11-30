var days = [
    {
        hour: "08 :",
        time: "08",
        ampm: "am",
        id: "0",
        reminder:""
    },
    {
        hour: "09 : ",
        time: "09",
        ampm: "am",
        id: "1",
        reminder: "",
    },
    {
        hour: "10 : ",
        time: "10",
        ampm: "am",
        id: "2",
        reminder: "",

    },
    {
        hour: "11 : ",
        time: "11",
        ampm: "am",
        id: "3",
        reminder: "",
    },
    {
        hour: "12 : ",
        time: "12",
        ampm: "pm",
        id: "4",
        reminder: "",
    },
    {
        hour: "01 : ",
        time: "13",
        ampm: "pm",
        id: "5",
        reminder: "", 

    },
    {
        hour: "02 : ",
        time: "14",
        ampm: "pm",
        id: "6",
        reminder: "",
    },
    {
        hour:"03 : ",
        time: "15",
        ampm: "pm",
        id: "7",
        reminder: "",
    },
    {
        hour: "04 : ",
        time: "16",
        ampm: "pm : ",
        id: "8",
        reminder: "",
        },
    {
        hour: "05 : ",
        time: "16",
        ampm: "pm",
        id: "9",
        reminder: "",
    },
    {
        hour: "06 :",
        time: "17",
        ampm: "pm",
        id: "10",
        reminder: "" 
    },
]

function getToday () {
    var today = moment().format("MMM Do YYYY");
    $("#today").text(today);
}

function toDosave (){
    localStorage.setItem("days", JSON.stringify(days));//putting my 
}


function toDoDisplay() {
    days.forEach(function (_thisHour) {
        $(`#${_thisHour.id}`).val(_thisHour.reminder);
    })
}

function init () {
    var storedDay = JSON.parse(localStorage.getItem("days"));
    if (storedDay) {
        days = storedDay;
    }
    toDosave();
    toDoDisplay();
}
getToday();

days.forEach(function(thisHour)//creating a row for each of my hours in my days //
 {
    var hRow= $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hRow);


var hourField = $("<div>")//creating a new div for my hours..//

.text(`${thisHour.hour}${thisHour.ampm}`)//backtics or the grave accent allows you concatentate parts into a single string...(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)


.attr({
    "class": "col-md-2 hour"
});


var hour = $("<div>")
.attr ({
    "class": "col-md-9 description p-0"//using some good ole fashion columns to get the hours over where. also gives it the descrption class.
});


var data = $("<textarea>");
    hour.append(data);
    data.attr("id", thisHour.id);//trying to get the css to link based on time...//checks to see if the id in the days array is less then or greater then the time of day. 
    if (thisHour.time < moment().format("HH")) {
        data.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        data.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        data.attr({
            "class": "future"
        })
    }

var save = $("<button>")
.attr ({
    "class": "col-md-1 saveBtn"//moves the button over to the right side.

});


hourRow.append(hourField,hour,save);
})

init();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIt = $(this).getElementByClass(".description").children(".past", ".present", ".future").attr("id");
    days[saveIt].reminder = $(this).getElementByClass(".description").children(".past", ".present", ".future").val();//i used MDN for the sibling too
    
    getToday();//saved data is saved to an array within the days array.and we are accessing the reminder portion. it is going to be equal to the value of the 
    toDoDisplay();
})