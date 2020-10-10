import { Subject } from "rxjs";
import { multicast, refCount } from "rxjs/operators";

class SubjectMixin {
  subject$;
  multicasted$;
  subscriptions;

  constructor(observable$) {
    this.subject$ = new Subject();
    this.subscriptions = [];
    this.multicasted$ = observable$.pipe(multicast(this.subject$), refCount());
  }

  subscribe(subscriber) {
    const subscription = this.multicasted$.subscribe(subscriber);
    this.subscriptions.push(subscription);
  }

  unsubscribeAll() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}

export default SubjectMixin;
