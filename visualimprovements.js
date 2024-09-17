// Example using basic CSS animations to smooth out chart updates
function updateChartWithAnimation(chart, newData) {
  chart.data.datasets[0].data = newData;
  chart.update({ duration: 800, easing: 'easeInOutQuart' });
}
