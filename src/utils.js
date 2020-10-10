import constants from "./constants";

export const getExponentialValue = (average) => {
  return -average * Math.log(Math.random());
};

export const getGaussValue = (average, inflection) => {
  const k = 6;
  let summ = 0;

  for (let i = 1; i < k; i++) {
    const rand = Math.random();
    summ += rand;
  }

  return average + inflection * Math.sqrt(12 / k) * (summ - k / 2);
};

export const generateTask = () => {
  const rand = Math.random();

  if (rand <= 0.4) return constants.entities.A;
  if (rand <= 0.65) return constants.entities.B;
  return constants.entities.C;
};
