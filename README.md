This is non-blocking and very easy in usage queue (or any data) handler for Node.js applications.
Provide an options object which should contains next properties:

- **taskHandler** - function which will handle your tasks;
- **successCallback** - function which takes returned by taskHandler data as an argument;
- **errorCallback** - function which will be called when taskHandler fails;
- **eventEmitTimeoutValue** - positive integer, milliseconds between ticks;

TaskManager instance has one method:
- **addTask()**, which enqueues provided task;

This is an example of usage (You can run this code with esm module for supporting import: node -r esm ...):

```js
import { TaskManager } from 'non-blocking-queue-handler';

const taskManager = new TaskManager({
  taskHandler: task => {
    console.log(`Task scheduled: ${JSON.stringify(task)}`);
    if ( task._id && task._id % 2 ) {
      throw new Error('Some test error message')
    }
    return task;
  },
  errorCallback: e => console.log(`Task handling fails: ${e.message}`),
  successCallback: data => console.log(`Task have been successfully handled: ${JSON.stringify(data)}`),
  eventEmitTimeoutValue: 2000
});


for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    taskManager.addTask({
      type: 'test',
      _id: i
    })
  }, i*1000)
};

```
That's all, thanks for attention and good luck !
