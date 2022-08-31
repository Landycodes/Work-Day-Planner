var nineAm = document.getElementById('9am');
var tenAm = document.getElementById('10am');
var elevenAm = document.getElementById('11am');
var twelvePm = document.getElementById('12pm');
var onePm = document.getElementById('1pm');
var twoPm = document.getElementById('2pm');
var threePm = document.getElementById('3pm');
var fourPm = document.getElementById('4pm');
var fivePm = document.getElementById('5pm');
var timeBlock = document.getElementsByClassName('timeblock');
var text = document.getElementsByClassName('textinput');

//todays date in title
var time = moment().format('MMM Do YYYY');
$('#currentDay').text(time);

//internal 24 hour clock. time is given in 24 hr military format
const inClock = moment();
inClockTime = inClock.format('HH');

//change value to check time functionality
//inClockTime = 14;

//sets the text value for each input box based on localstorage input
for (let i = 0; i < text.length; i++) {
    text[i].value = localStorage.getItem('box ' + [i]);
};

//adds an event listener to each save button inside of timeblock and records the input value to localstorage
for (let i = 0; i < timeBlock.length; i++) {
    timeBlock[i].children[1].addEventListener('click', function() {
        localStorage.setItem('box ' + [i], timeBlock[i].children[0].value)
        //change button color on click
        timeBlock[i].children[1].classList.remove('btn-success');
    });
    //change button color if input has been changed
    timeBlock[i].children[0].addEventListener('input', function() {
        timeBlock[i].children[1].classList.add('btn-success');
    });
};


//decides color scheme depending on time
if(inClockTime == 8) {
    nineAm.classList.remove('btn-primary');
    nineAm.classList.add('btn-warning');
} else if(inClockTime == 9 ) {
    nineAm.classList.remove('btn-primary');
    nineAm.classList.add('btn-success');
    //next hour is coming up
    tenAm.classList.remove('btn-primary');
    tenAm.classList.add('btn-warning');
} else if (inClockTime > 9 && inClockTime < 18) {
    nineAm.classList.remove('btn-primary');
    nineAm.classList.add('btn-secondary');
}

if(inClockTime == 10 ) {
    tenAm.classList.remove('btn-primary');
    tenAm.classList.add('btn-success');

    elevenAm.classList.remove('btn-primary');
    elevenAm.classList.add('btn-warning');
} else if(inClockTime > 10) {
    tenAm.classList.remove('btn-primary');
    tenAm.classList.add('btn-secondary');
}

if(inClockTime == 11) {
    elevenAm.classList.remove('btn-primary');
    elevenAm.classList.add('btn-success');

    twelvePm.classList.remove('btn-primary');
    twelvePm.classList.add('btn-warning');
} else if(inClockTime > 11) {
    elevenAm.classList.remove('btn-primary');
    elevenAm.classList.add('btn-secondary');
}

if(inClockTime == 12) {
    twelvePm.classList.remove('btn-primary');
    twelvePm.classList.add('btn-success');

    onePm.classList.remove('btn-primary');
    onePm.classList.add('btn-warning');
} else if(inClockTime > 12) {
    twelvePm.classList.remove('btn-primary');
    twelvePm.classList.add('btn-secondary');
}

if(inClockTime == 13) {
    onePm.classList.remove('btn-primary');
    onePm.classList.add('btn-success');

    twoPm.classList.remove('btn-primary');
    twoPm.classList.add('btn-warning');
} else if(inClockTime > 13) {
    onePm.classList.remove('btn-primary');
    onePm.classList.add('btn-secondary');
}

if(inClockTime == 14) {
    twoPm.classList.remove('btn-primary');
    twoPm.classList.add('btn-success');

    threePm.classList.remove('btn-primary');
    threePm.classList.add('btn-warning');
} else if(inClockTime > 14) {
    twoPm.classList.remove('btn-primary');
    twoPm.classList.add('btn-secondary');
}

if(inClockTime == 15) {
    threePm.classList.remove('btn-primary');
    threePm.classList.add('btn-success');

    fourPm.classList.remove('btn-primary');
    fourPm.classList.add('btn-warning');
} else if(inClockTime > 15) {
    threePm.classList.remove('btn-primary');
    threePm.classList.add('btn-secondary');
}

if(inClockTime == 16) {
    fourPm.classList.remove('btn-primary');
    fourPm.classList.add('btn-success');

    fivePm.classList.remove('btn-primary');
    fivePm.classList.add('btn-warning');
} else if(inClockTime > 16) {
    fourPm.classList.remove('btn-primary');
    fourPm.classList.add('btn-secondary');
}

if(inClockTime == 17) {
    fivePm.classList.remove('btn-primary');
    fivePm.classList.add('btn-success');

} else if(inClockTime > 17) {
    fivePm.classList.remove('btn-primary');
    fivePm.classList.add('btn-secondary');
}

if (inClockTime >= 18) {
    nineAm.classList.remove('btn-secondary');
    nineAm.classList.add('btn-primary');
    tenAm.classList.remove('btn-secondary');
    tenAm.classList.add('btn-primary');
    elevenAm.classList.remove('btn-secondary');
    elevenAm.classList.add('btn-primary');
    twelvePm.classList.remove('btn-secondary');
    twelvePm.classList.add('btn-primary');
    onePm.classList.remove('btn-secondary');
    onePm.classList.add('btn-primary');
    twoPm.classList.remove('btn-secondary');
    twoPm.classList.add('btn-primary');
    threePm.classList.remove('btn-secondary');
    threePm.classList.add('btn-primary');
    fourPm.classList.remove('btn-secondary');
    fourPm.classList.add('btn-primary');
    fivePm.classList.remove('btn-secondary');
    fivePm.classList.add('btn-primary');
    localStorage.clear(); //removes all tasks once day is done
}

