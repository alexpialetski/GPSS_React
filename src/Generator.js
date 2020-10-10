import { interval } from "rxjs";
import { mapTo } from "rxjs/operators";

import ObservableClass from "./ObservableClass";
import { generateTask } from "./utils";

class Generator extends ObservableClass {
  constructor() {
    const observable$ = interval(1000).pipe(mapTo(generateTask));
    super(observable$);
  }
}

export default Generator;
