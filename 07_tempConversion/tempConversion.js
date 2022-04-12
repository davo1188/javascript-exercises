const ftoc = function(temp) {
  let celsius = (temp - 32) * .5556;
  celsius = Math.round(celsius * 10) / 10;
  return celsius;
};

const ctof = function(temp) {
  let fahrenheit = (temp * 1.8) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
