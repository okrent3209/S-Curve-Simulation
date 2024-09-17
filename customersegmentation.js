const customerSegments = {
  earlyAdopters: 20,
  mainstream: 50,
  lateAdopters: 30
};

function updateS_CurveForSegments() {
  // Example: Early adopters will adopt quickly
  const earlyAdoptionRate = (sliderValues.rAndD + sliderValues.marketing) * customerSegments.earlyAdopters / 100;
  const mainstreamAdoptionRate = (sliderValues.rAndD + sliderValues.marketing) * customerSegments.mainstream / 100;
  const lateAdoptionRate = (sliderValues.rAndD + sliderValues.marketing) * customerSegments.lateAdopters / 100;
  return earlyAdoptionRate + mainstreamAdoptionRate + lateAdoptionRate;
}
