class TaskDistributor {
  #computers;

  constructor(computers) {
    this.#computers = computers;
  }

  distributeTask(task) {
    let minQueue = this.#computers[0].numberOfTasksInQueue;
    let computer = this.#computers[0];
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
