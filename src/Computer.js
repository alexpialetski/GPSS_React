import { Observable, Subject } from "rxjs";
import constants from "./constants";

class Computer {
  #cpu;

  constructor(name) {
    this.name = name;
    this.numberOfTasksInQueue = 0;
    this.#cpu = new Subject();
  }

  getCpu() {
    return this.#cpu;
  }

  executeTask(task) {
    this.#cpu.next(task);
  }

  getComputingTime(task) {
    return constants.timeToExecute[task];
  }

  execute;
}
