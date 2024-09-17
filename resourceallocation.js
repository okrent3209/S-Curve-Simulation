let budget = 100;

function adjustBudget(value) {
  budget = value;
  document.getElementById('budget-value').innerText = value;
  // Force trade-offs between R&D, Marketing, and Pricing
  updateSliderConstraints();
}
