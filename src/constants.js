const entities = {
  A: "A",
  B: "B",
  C: "C",
  channel: "channel",
  computer1: "computer1",
  computer2: "computer2",
};
const speed = 1;
const probabilities = {
  [entities.A]: 0.4,
  [entities.B]: 0.25,
  [entities.C]: 0.35,
};
const timeToGenerateTask = 20;
const timeToExecute = {
  [entities.A]: 10,
  [entities.B]: 20,
  [entities.C]: 15,
  [entities.channel]: 3.5,
};
const inflectionTime = 1.5;
const totalTime = 100 * 60;

export default {
  entities,
  speed,
  probabilities,
  timeToGenerateTask,
  timeToExecute,
  inflectionTime,
  totalTime,
};
