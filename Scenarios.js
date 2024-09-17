const scenarios = [
  { event: "Competitor launches disruptive technology", impact: () => competitorActions() },
  { event: "Economic downturn reduces customer spending", impact: () => reduceCustomerSatisfaction() },
  // Add more scenarios here
];

function triggerScenario() {
  let randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  alert(randomScenario.event);
  randomScenario.impact();
}
