import { interval } from "rxjs";
import { mapTo } from "rxjs/operators";

import SubjectMixinAC from "./SubjectMixinAC";
import { generateTask } from "./utils";

class Generator extends SubjectMixinAC {
  constructor() {
    const observable$ = interval(1000).pipe(mapTo(generateTask));
    super(observable$);
  }
}

export default Generator;
