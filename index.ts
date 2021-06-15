import { of, Subject } from 'rxjs';
import { map, take, first } from 'rxjs/operators';

const source = of('World').pipe(map(x => `Hello ${x}!`));

source.subscribe(console.log);

let myObservable = new Subject();

let subscription = myObservable.pipe(first()).subscribe(x => {
  //Do something with the data.
  console.log(x);
});

let subscriptionTwo = myObservable.subscribe(x => {
  //Do something with the data.
  console.log(x);
});

myObservable.next('Foo');
//myObservable.complete();

console.log('is subscription closed ? ', subscription.closed);

console.log('is subscriptionTwo closed ? ', subscriptionTwo.closed);
