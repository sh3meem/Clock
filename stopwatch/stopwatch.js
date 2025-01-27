let timer; 
let isRunning = false; 
let seconds = 0; 
let minutes = 0; 
let hours = 0; 

// Function to start or stop the timer
function startStop() {
    if (isRunning) { // If the timer is running 
        clearInterval(timer); // Stop the timer by clearing the interval
        document.getElementById('startStop').textContent = "Start"; 
    } else { // If the timer is stopped
        timer = setInterval(updateTime, 1000); // Start the timer and call the updateTime function every 1000ms (1 second)
        document.getElementById('startStop').textContent = "Stop"; // Change the button text to "Stop"
    }
    isRunning = !isRunning; // Toggle the isRunning state
}

// Function to update the time every second
function updateTime() {
    seconds++; // Increment seconds by 1

    // Check if seconds reach 60, reset to 0 and increment minutes
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    // Check if minutes reach 60, reset to 0 and increment hours
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    // Update the displayed time in the 'time' element
    document.getElementById('time').textContent = formatTime(hours, minutes, seconds);
}

// Function to reset the timer
function reset() {
    clearInterval(timer); // Stop the timer by clearing the interval
    isRunning = false; 
    seconds = 0; 
    minutes = 0; 
    hours = 0;
    document.getElementById('time').textContent = formatTime(hours, minutes, seconds); // Update the displayed time
    document.getElementById('startStop').textContent = "Start"; // Reset the button text to "Start"
}

// Function to format the time into HH:MM:SS format
function formatTime(hours, minutes, seconds) {
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`; // Return the formatted time string
}

// Function to add leading zeros for values less than 10 (e.g., 09 instead of 9)
function pad(value) {
    return value < 10 ? '0' + value : value; // If value is less than 10, add a leading zero
}
































// // 2. setTimeout()
// Purpose: Executes a function once after a specified delay (in milliseconds).

// Behavior: The function is executed only once after the delay, and it will not repeat.

// // 1. setInterval()
// Purpose: Executes a function repeatedly at specified intervals (in milliseconds).

// Behavior: The function will be called repeatedly at the set interval until clearInterval() is called to stop it.