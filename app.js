// CONVERT WEIGHT FUNCTIONS 
// think this is where Jonas uses IFEE (public / private functions and variables - check out when moving forward)
function allWeight() {
    // function for converting weight
    function convertWeight() {
        var kgValue = document.querySelector('.kg').value;
        var lbValue = document.getElementById('lb');
        lbValue.innerHTML = (kgValue * 2.20462).toFixed(2);
    }

    function addingWeightEventListeners() {
        // Add event listener to convert button
        document.querySelector('.weight_btn').addEventListener('click', convertWeight);

        // Add event listener to enter key
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                convertWeight();
            }
        });
    }
    addingWeightEventListeners();
}
allWeight();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CONVERT TEMPERATURE FUNCTIONS 
function allTemperature() {
    // function for converting temperature
    function convertTemp() {
        var cValue = document.querySelector('.cel').value;
        var fValue = document.getElementById('fahrenheit');
        fValue.innerHTML = Math.round(cValue * (9 / 5) + 32);
    }

    function addingTempEventListeners() {
        // Add event listener to convert button
        document.querySelector('.temp_btn').addEventListener('click', convertTemp);

        // Add event listener to enter key
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                convertTemp();
            }
        });
    }
    addingTempEventListeners();
}
allTemperature();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// CONVERT SPEED FUNCTIONS 
function allSpeed() {
    // function for converting temperature
    function convertSpeed() {
        var kmhValue = document.querySelector('.kmh').value;
        var mphValue = document.getElementById('mph');
        mphValue.innerHTML = (kmhValue / 1.609344).toFixed(2);
    }

    function addingSpeedEventListeners() {
        // Add event listener to convert button
        document.querySelector('.speed_btn').addEventListener('click', convertSpeed);

        // Add event listener to enter key
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                convertSpeed();
            }
        });
    }
    addingSpeedEventListeners();
}
allSpeed();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// CONVERT HEIGHT FUNCTIONS 
function allHeight() {
    // function for converting temperature
    function convertHeight() {
        var mValue = document.querySelector('.m').value;
        var ftValue = document.getElementById('ft');
        ftValue.innerHTML = (mValue * 3.28084).toFixed(2);
    }

    function addingHeightEventListeners() {
        // Add event listener to convert button
        document.querySelector('.height_btn').addEventListener('click', convertHeight);

        // Add event listener to enter key
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                convertHeight();
            }
        });
    }
    addingHeightEventListeners();
}
allHeight();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ADDING LIVE TIME

var liveTimeROK = document.getElementById('timeK');

// time in Browser = time in Korea (app geared towards those already in Korea)
function timeKorea(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    liveTimeROK.textContent = (h + ":" + m + ":" + s + " KST ");
}

setInterval(timeKorea, 1000);



var liveTimeEST = document.getElementById('timeE');

// time in Browser = time in Korea (app geared towards those already in Korea)
function timeUSA(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours() - 14;
    liveTimeEST.textContent = (h + ":" + m + ":" + s + " EST ");
}

setInterval(timeUSA, 1000);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
