var number = function (busStops) {
  // Good Luck!
  let currentPassengers = 0;

  for (let i = 0; i < busStops.length; i++) {
    let [on, off] = busStops[i];
    currentPassengers -= off;
    currentPassengers = on;
  }
  return currentPassengers;
};

console.log(countPassengers([[10, 0], [3, 5], [5, 8]]));
