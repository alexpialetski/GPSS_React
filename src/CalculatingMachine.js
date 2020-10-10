import { Subject, merge } from "rxjs";
import { multicast, refCount } from "rxjs/operators";

// import ObservableClass from "./ObservableClass";
import Computer from "./Computer";
import TaskDistributor from "./TaskDistributor";
import constants from "./constants";

class CalculatingMachine {
  #subject;
  #machine;
  #computers;
  #taskDistributor;

  constructor() {
    this.#subject = new Subject();

    this.#computers = [
      new Computer(constants.entities.computer1),
      new Computer(constants.entities.computer2),
    ];
    this.#taskDistributor = new TaskDistributor(this.#computers);

    /////////////////////////////////////////////////////////////

    const executionFlow$ = merge(this.#computers);
    this.#machine = executionFlow$.pipe(multicast(this.#subject), refCount());
  }

  executeTask(task) {
    this.#taskDistributor.distributeTask(task);
  }

  getComputers() {
    return this.#computers;
  }
}

export default CalculatingMachine;
