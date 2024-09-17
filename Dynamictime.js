// Add a timer to simulate time progression
let timeProgress = 0; // time step
const maxTime = 100; // simulate up to 100 units of time

function updateSimulation() {
  if (timeProgress < maxTime) {
    timeProgress++;
    updateS_Curve();
    updateRevenue();
  }
}

// Start the simulation with a timer
function startTimeProgression() {
  setInterval(updateSimulation, 1000); // update every second
}
