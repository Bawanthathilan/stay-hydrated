
function myFunction(){
    var inputTime = document.getElementById("dateInput").value;
    console.log(inputTime)
}
document.getElementById('dateval').addEventListener('click', function() {
    myFunction();
});

function myFunction() {
    var inputTime = document.getElementById("dateInput").value;
    if (inputTime) {
        inputTime = inputTime;
      } else {
        inputTime = 30;
      }

    chrome.alarms.create('testAlarm', {
        periodInMinutes: inputTime 
    });
};

var options = {
type: "basic",
title: "Welcome Drink Water Reminder",
message: "stay hydrated",
iconUrl: "icon128.png"
};


chrome.notifications.create(options, callback);



function callback(){
    console.log('Popup done!')
}