function generateReport() {
  let report = `
    Final Market Share: ${calculateMarketShare()}%
    Profit: ${calculateProfit()}$
    Customer Retention: ${calculateCustomerRetention()}%
    Key Learnings: Increase R&D for future disruptive technologies.
  `;
  alert(report);
}
