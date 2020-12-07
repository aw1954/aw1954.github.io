const theBody = document.querySelector('body');
console.log(theBody);
console.log(theBody.style);
//let nextText = document.querySelector('h1');
let timeText = document.querySelector('h3');
console.log(timeText.textContent);

var today = new Date();
var hr = today.getHours()
if (hr > 12){
    hr = hr - 12;
    var time = hr + ":" + today.getMinutes() + "PM";
} else {
    var time = today.getHours() + ":" + today.getMinutes() + "AM";
}
timeText.textContent = time;