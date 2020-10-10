import { of } from "rxjs";

import constants from "./constants";
import SubjectMixinAC from "./SubjectMixinAC";

class Computer extends SubjectMixinAC {
  constructor(name) {
    super(of());
    this.name = name;
    this.numberOfTasksInQueue = 0;
  }

  executeTask(task) {
    this.numberOfTasksInQueue += 1;
    this.multicasted$.next({ task: task, time: constants.timeToExecute[task] });
  }
}

export default Computer;
