// Creating a new variable for the date-time of the countdown and using the JavaScript getTime function to convert the value in milliseconds since 1 Jan 1970
var countDownDate = new Date("April 1, 2021 18:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime(); // Creating a variable for the current date and using the same getTime function
    var difference = countDownDate - now; // Finding the amount of milliseconds left till the event
    var daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24)); // Finding the days left and storing it in a variable using some arithmetic functions
    var hoursLeft = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // % --> Modulo operator
    var minutesLeft = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = daysLeft + "d " + hoursLeft + "h " + minutesLeft + "m " + secondsLeft + "s ";
    // Concatenating the variables and the strings and linking it to the html paragraph
}, 1000); // The set interval function means that the function will repeat continuously after an interval of 1000 ms (1s)

// Date-time variables for the times when the notifications need to be scheduled
var beforeADay = new Date("March 31, 2021 18:00:00");
var beforeAHour = new Date("April 1, 2021 17:00:00"));
var pushAppointments = [ // Creating an array to store all the notifications
    {
        id: 1, // The first notification
        title: "Event Reminder", // The title at the top of the push notification
        at: beforeADay, // Referring to the date-time variable created earlier
        text: "In exactly 24 hours, Random Event will begin!", // The main message under the header
    },
    {
        id: 2, // The second notification with the same properties
        title: "Event Reminder",
        at: beforeAHour,
        text: "In exactly an hour, Random Event will begin!",
    }
];
// Calling the inbuilt function for scheduling notifications using the array
cordova.plugins.notification.local.schedule(pushAppointments);