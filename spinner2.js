let count = 0;
let spinnerStates = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const cycleSpinner = function() {
  let spinnerState = spinnerStates[count];
  process.stdout.write(spinnerState);
  count++;
  // reset counter if we reach end of array
  if (count === spinnerStates.length) {
    count = 0;
  }
};

setInterval(cycleSpinner, 200);