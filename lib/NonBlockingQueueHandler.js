const EventEmitter = require('node-chain-event-emitter');
const validateOptions = require('./helpers/optionsValidator');

class NonBlockingQueueHandler {
  constructor(options) {
    const checking = validateOptions(options);
    if (checking.error) {
      throw new Error(checking.error);
    }
    const { ctx } = options;
    this.eventEmitter = ctx ? new EventEmitter({ ctx }) : new EventEmitter();
    this.tickEvent = options.tickEvent;
    this.interval = options.interval;
    this.handlers = options.handlers;
    this.data = options.data;
  }

  tickEmitter() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.eventEmitter.emit(this.tickEvent, this.data);
  }

  tickHandler(data, next) {
    this.timeout = setTimeout(this.tickEmitter.bind(this), this.interval);
    next();
  }

  start() {
    this.eventEmitter.on(this.tickEvent, this.tickHandler.bind(this));
    this.handlers.forEach(handler => this.eventEmitter.on(this.tickEvent, handler.bind(this)));
    this.tickEmitter();
  }

  stop() {
    this.eventEmitter.off(this.tickEvent);
  }
}

module.exports = NonBlockingQueueHandler;
