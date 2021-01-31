var schedule = [
    {
        hour: "08 :",
        time: "08",
        dayNight: "day",
        id: "0",
        reminder:""
    },
    {
        hour: "09 : ",
        time: "09",
        dayNight: "day",
        id: "1",
        reminder: "",
    },
    {
        hour: "10 : ",
        time: "10",
        dayNight: "day",
        id: "2",
        reminder: "",

    },
    {
        hour: "11 : ",
        time: "11",
        dayNight: "day",
        id: "3",
        reminder: "",
    },
    {
        hour: "12 : ",
        time: "12",
        dayNight: "Night",
        id: "4",
        reminder: "",
    },
    {
        hour: "01 : ",
        time: "13",
        dayNight: "Night",
        id: "5",
        reminder: "", 

    },
    {
        hour: "02 : ",
        time: "14",
        dayNight: "Night",
        id: "6",
        reminder: "",
    },
    {
        hour:"03 : ",
        time: "15",
        dayNight: "Night",
        id: "7",
        reminder: "",
    },
    {
        hour: "04 : ",
        time: "16",
        dayNight: "Night : ",
        id: "8",
        reminder: "",
        }
 
]

 getHeaderDate= () =>{
    var currentDate = moment().format("MMM Do YYYY");
    $("#currentDate").text(currentDate);
}

save = () => {
    localStorage.setItem("schedule", JSON.stringify(schedule));//putting my things into local storage
}


 display =() =>{
    schedule.forEach(function (currentHour) {
        $(`${currentHour.id}`).val(currentHour.reminder);
    })
}

 init =() =>{
    var storedDay = JSON.parse(localStorage.getItem("schedule"));
    if (storedDay) {
        schedule = storedDay;
    }
    save();
    display();
}
getHeaderDate();

schedule.forEach(function(currentHour)//creating a row for each of my hours in my schedule //
 {
    var hRow= $("<form>").attr({
        "class": "row"
    });
    $(".container").append(hRow);


var sideBar = $("<div>")//creating a new div for my hours..//

.text(`${currentHour.hour}${currentHour.dayNight}`)//backtics or the grave accent allows you concatentate parts into a single string...(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
.attr({
    "class": "col-md-2 hour"
});


var hour = $("<div>")
.attr ({
    "class": "col-md-9 description p-0"//using some good ole fashion columns to get the hours over where. also gives it the descrption class.
});


var styles = $("<textarea>");
    hour.append(styles);
    styles.attr("id", currentHour.id);//trying to get the css to link based on time...//checks to see if the id in the schedule array is less then or greater then the time of day. 
    if (currentHour.time < moment().format("HH")) {
        styles.attr ({
            "class": "past", 
        })
    } else if (currentHour.time === moment().format("HH")) {
        styles.attr({
            "class": "present"
        })
    } else if (currentHour.time > moment().format("HH")) {
        styles.attr({
            "class": "future"
        })
    }

var save = $("<button>")
.attr ({
    "class": "col-md-1 saveBtn"//moves the button over to the right side.

});


hRow.append(sideBar,hour,save);
})

init();

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveEvent = $(this).getElementByClass(".description").children(".past", ".present", ".future").attr("id");
    schedule[saveEvent].reminder = $(this).getElementByClass(".description").children(".past", ".present", ".future").val();//i used MDN for the sibling too
    
    getHeaderDate();//saved styles is saved to an array within the schedule array.and we are accessing the reminder portion. it is going to be equal to the value of the 
    display();
})