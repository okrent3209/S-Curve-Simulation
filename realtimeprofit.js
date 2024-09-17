function calculateProfit() {
  const revenue = sliderValues.revenueGrowth * 1000;
  const costs = sliderValues.rAndD * 500 + sliderValues.marketing * 300;
  return revenue - costs;
}
