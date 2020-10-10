class ObservableClass {
  generator$;
  subscriptions;

  constructor(observable$) {
    this.subscriptions = [];
    this.generator$ = observable$;
  }

  subscribe(subscriber) {
    const subscription = this.generator$.subscribe(subscriber);
    this.subscriptions.push(subscription);
  }

  unsubscribeAll() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

export default ObservableClass;
