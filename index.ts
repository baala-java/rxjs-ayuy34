import { of, Subject } from 'rxjs';
import { map, take, first } from 'rxjs/operators';

const source = of('World').pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);

let myObservable = new Subject();

let subscription = myObservable.pipe(first()).subscribe(x => {
  //Do something with the data.
  console.log(x);
});

myObservable.next('Foo');
//myObservable.complete();

console.log(subscription.closed);

