This is non-blocking and very easy in usage queue (or any data) handler for Node.js applications.
Provide an options object which should contains next properties:

- **interval** - positive integer, milliseconds between ticks;
- **tickEvent** - the name of event which should be used by event emitter;
- **handlers** - array of async, bounded or usual functions which should handle data, all of this functions take two arguments - data and next, data is specified bellow, next is function which  call next handler;
- **data** - array, object or any other variable which should be handled;

Queue Handler instance has two methods for managing:
- **start()**, which running events emitting data handling;
- **stop()**, which stops events emitting and data handling;

This is an example of usage:

```js
const NonBlockingQueueHandler = require('non-blocking-queue-handler');

const a = [1,2,3];

let t = new NonBlockingQueueHandler({
  interval: 1000,
  tickEvent: 'tick',
  data: a,
  handlers: [
    (data, next) => {
      if ( data.length ) {
        next();
      }
    },
    (data) => {
      console.log(data.shift())
    }
  ]
});

setTimeout(()=>{
  a.push(4);
}, 5500);

setTimeout(()=>{
  a.push(5);
}, 10500);


setTimeout(()=>{
  t.stop();
}, 12500);

setTimeout(()=>{
  a.push(6);
}, 15000);

t.start();


```
That's all, thanks for attention and good luck !
