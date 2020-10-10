import { merge } from "rxjs";

import TaskDistributor from "./TaskDistributor";
import SubjectMixinAC from "./SubjectMixinAC";

class CalculatingMachine extends SubjectMixinAC {
  #computers;
  #taskDistributor;

  constructor(computers) {
    const observable$ = merge(computers);

    super(observable$);

    this.#computers = computers;
    this.#taskDistributor = new TaskDistributor(computers);
  }

  executeTask(task) {
    this.#taskDistributor.distributeTask(task);
  }

  getComputers() {
    return this.#computers;
  }
}

export default CalculatingMachine;
