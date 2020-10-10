class TaskDistributor {
  #computers;

  constructor(computers) {
    this.#computers = computers;
  }

  distributeTask(task) {
    let minQueue = 0;
    let computer;
    this.#computers.forEach((comp) => {
      if (comp.numberOfTasksInQueue < minQueue) {
        minQueue = comp.numberOfTasksInQueue;
        computer = comp;
      }
    });
    computer.executeTask(task);
  }
}

export default TaskDistributor;
