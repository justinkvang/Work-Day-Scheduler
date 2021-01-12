// this loads all functions in window screen onload
window.onload = function(){
    colorChange();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
    }

// shows current date taken from moment
var showcurrentDay = moment().format('MMMM Do YYYY');
$("#currentDay").append(showcurrentDay);

// shows current time taken from moment
var showcurrentTime = moment().format('h:mm a');
$("#currentTime").append(showcurrentTime);

// grabing the current time so the functions below can refer to it
var currentTime = new Date().getHours();

// function to change color depending if the time is past, present, or future
// if past time color = gray
// if present time color = blue
// if future time color = light blue
function colorChange(){
    // 9AM color change
    if (currentTime > 9){
        $("#color9am").addClass("past");
    }else if (currentTime >= 9 && currentTime < 10) {
        $("#color9am").addClass("present");
    }else if (currentTime < 9) {
        $("#color9am").addClass("future");
    }

    // 10AM color change
    if (currentTime > 10){
        $("#color10am").addClass("past");
    }else if (currentTime >= 10 && currentTime < 11) {
        $("#color10am").addClass("present");
    }else if (currentTime < 10) {
        $("#color10am").addClass("future");
    }

    // 11AM color change
    if (currentTime > 11) {
        $("#color11am").addClass("past");
    } else if (currentTime >= 11 && currentTime < 12) {
        $("#color11am").addClass("present");
    } else if (currentTime < 11) {
        $("#color11am").addClass("future");
    }

    // 12PM color change
    if (currentTime > 12) {
        $("#color12pm").addClass("past");
    } else if (currentTime >= 12 && currentTime < 13) {
        $("#color12pm").addClass("present");
    } else if (currentTime < 12) {
        $("#color12pm").addClass("future");
    }

    // 1PM color change
    if (currentTime > 13) {
        $("#color1pm").addClass("past");
    } else if (currentTime >= 13 && currentTime < 14) {
        $("#color1pm").addClass("present");
    } else if (currentTime < 13) {
        $("#color1pm").addClass("future");
    }

    // 2PM color change
    if (currentTime > 14) {
        $("#color2pm").addClass("past");
    } else if (currentTime >= 14 && currentTime < 15) {
        $("#color2pm").addClass("present");
    } else if (currentTime < 14) {
        $("#color2pm").addClass("future");
    }

    // 3PM color change
    if (currentTime > 15) {
        $("#color3pm").addClass("past");
    } else if (currentTime >= 15 && currentTime < 16) {
        $("#color3pm").addClass("present");
    } else if (currentTime < 15) {
        $("#color3pm").addClass("future");
    }

    // 4PM color change
    if (currentTime > 16) {
        $("#color4pm").addClass("past");
    } else if (currentTime >= 16 && currentTime < 17) {
        $("#color4pm").addClass("present");
    } else if (currentTime < 16) {
        $("#color4pm").addClass("future");
    }

    // 5PM color change
    if (currentTime > 17) {
        $("#color5pm").addClass("past");
    } else if (currentTime >= 17 && currentTime < 18) {
        $("#color5pm").addClass("present");
    } else if (currentTime < 17) {
        $("#color5pm").addClass("future");
    }
}
// function for when user writes in text box, saves, and stores to local drive
// user clicks into text box to write
// user writes and clicks save button
// saved data is stored to local storage 
// repeat for each hour
function nineAM() {
    var input_textarea = document.querySelector("#color9am");
    var output_div = document.querySelector("#color9am");
    var save_button = document.querySelector("#button9am");
    
    save_button.addEventListener("click", updateOutput);
    
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
    
    function updateOutput() {
        localStorage.setItem("content", input_textarea.value);
    
        output_div.textContent = input_textarea.value;
    }
    }
    

    function tenAM() {
    var input_textarea2 = document.querySelector("#color10am");
    var output_div2 = document.querySelector("#color10am");
    var save_button2 = document.querySelector("#button10am");
    
    save_button2.addEventListener("click", updateOutput2);
    
    output_div2.textContent = localStorage.getItem("content2");
    input_textarea2.value = localStorage.getItem("content2");
    
    function updateOutput2() {
        localStorage.setItem("content2", input_textarea2.value);
    
        output_div2.textContent = input_textarea2.value;
    }
    }

    
    function elevenAM() {
    var input_textarea3 = document.querySelector("#color11am");
    var output_div3 = document.querySelector("#color11am");
    var save_button3 = document.querySelector("#button11am");
    
    save_button3.addEventListener("click", updateOutput3);
    
    output_div3.textContent = localStorage.getItem("content3");
    input_textarea3.value = localStorage.getItem("content3");
    
    function updateOutput3() {
        localStorage.setItem("content3", input_textarea3.value);
    
        output_div3.textContent = input_textarea3.value;
    }
    }
    
    
    function twelvePM() {
    var input_textarea4 = document.querySelector("#color12pm");
    var output_div4 = document.querySelector("#color12pm");
    var save_button4 = document.querySelector("#button12pm");
    
    save_button4.addEventListener("click", updateOutput4);
    
    output_div4.textContent = localStorage.getItem("content4");
    input_textarea4.value = localStorage.getItem("content4");
    
    function updateOutput4() {
        localStorage.setItem("content4", input_textarea4.value);
    
        output_div4.textContent = input_textarea4.value;
    }
    }
    
    
    function onePM() {
    var input_textarea5 = document.querySelector("#color1pm");
    var output_div5 = document.querySelector("#color1pm");
    var save_button5 = document.querySelector("#button1pm");
    
    save_button5.addEventListener("click", updateOutput5);
    
    output_div5.textContent = localStorage.getItem("content5");
    input_textarea5.value = localStorage.getItem("content5");
    
    function updateOutput5() {
        localStorage.setItem("content5", input_textarea5.value);
    
        output_div5.textContent = input_textarea5.value;
    }
    }
    
    
    function twoPM() {
    var input_textarea6 = document.querySelector("#color2pm");
    var output_div6 = document.querySelector("#color2pm");
    var save_button6 = document.querySelector("#button2pm");
    
    save_button6.addEventListener("click", updateOutput6);
    
    output_div6.textContent = localStorage.getItem("content6");
    input_textarea6.value = localStorage.getItem("content6");
    
    function updateOutput6() {
        localStorage.setItem("content6", input_textarea6.value);
    
        output_div6.textContent = input_textarea6.value;
    }
    }
    
    
    function threePM() {
    var input_textarea7 = document.querySelector("#color3pm");
    var output_div7 = document.querySelector("#color3pm");
    var save_button7 = document.querySelector("#button3pm");
    
    save_button7.addEventListener("click", updateOutput7);
    
    output_div7.textContent = localStorage.getItem("content7");
    input_textarea7.value = localStorage.getItem("content7");
    
    function updateOutput7() {
        localStorage.setItem("content7", input_textarea7.value);
    
        output_div7.textContent = input_textarea7.value;
    }
    }
    
    
    function fourPM() {
    var input_textarea8 = document.querySelector("#color4pm");
    var output_div8 = document.querySelector("#color4pm");
    var save_button8 = document.querySelector("#button4pm");
    
    save_button8.addEventListener("click", updateOutput8);
    
    output_div8.textContent = localStorage.getItem("content8");
    input_textarea8.value = localStorage.getItem("content8");
    
    function updateOutput8() {
        localStorage.setItem("content8", input_textarea8.value);
    
        output_div8.textContent = input_textarea8.value;
    }
    }
    
    
    function fivePM() {
    var input_textarea9 = document.querySelector("#color5pm");
    var output_div9 = document.querySelector("#color5pm");
    var save_button9 = document.querySelector("#button5pm");
    
    save_button9.addEventListener("click", updateOutput9);
    
    output_div9.textContent = localStorage.getItem("content9");
    input_textarea9.value = localStorage.getItem("content9");
    
    function updateOutput9() {
        localStorage.setItem("content9", input_textarea9.value);
    
        output_div9.textContent = input_textarea9.value;
    }
    
}
