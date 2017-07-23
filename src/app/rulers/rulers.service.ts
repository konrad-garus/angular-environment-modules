import { Ruler } from './ruler';
import { Observable } from 'rxjs/Observable';

export abstract class RulersService {
  abstract get ruler(): Observable<Ruler>;
}
