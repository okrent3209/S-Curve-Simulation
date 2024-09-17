function competitorActions() {
  let competitorPressure = Math.random() * 10; // random pressure between 0 and 10
  if (competitorPressure > 7) {
    // Force user to adjust strategy
    alert("Competitor launched a disruptive technology! Adjust your inputs.");
  }
}
