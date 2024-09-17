function updateMetrics() {
  document.getElementById('market-share').innerHTML = calculateMarketShare();
  document.getElementById('profit').innerHTML = calculateProfit();
  document.getElementById('customer-retention').innerHTML = calculateCustomerRetention();
}
