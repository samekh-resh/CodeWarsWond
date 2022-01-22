
const outOfFuel = (pumpingDistance, mpg, fuelThatsLeft) => {
  return pumpingDistance <= mpg * fuelThatsLeft ? true : false;
};