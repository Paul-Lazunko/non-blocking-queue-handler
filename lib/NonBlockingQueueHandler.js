const EventEmitter = require('node-chain-event-emitter');
const validateOptions = require('./helpers/optionsValidator');

class NonBlockingQueueHandler {
  constructor(options) {
    const checking = validateOptions(options);
    if (checking.error) {
      throw new Error(checking.error);
    }
    this.eventEmitter = new EventEmitter();
    this.tickEvent = options.tickEvent;
    this.interval = options.interval;
    this.handler = options.handler;
    this.data = options.data;
  }

  tickEmitter() {
    clearTimeout(this.timeout);
    this.eventEmitter.emit(this.tickEvent, this.data);
  }

  tickHandler(data) {
    this.timeout = setTimeout(this.tickEmitter.bind(this), this.interval);
    this.handler.apply(this.handler, [data]);
  }

  start() {
    this.eventEmitter.on(this.tickEvent, this.tickHandler.bind(this));
    this.tickEmitter();
  }

  stop() {
    this.eventEmitter.off(this.tickEvent);
  }
}

module.exports = NonBlockingQueueHandler;
