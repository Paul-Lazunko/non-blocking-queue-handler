import { TTaskManagerResponse, TTaskManagerOptions } from './types';
import { TTask } from 'TTask';
import { QueueManager } from './QueueManager';
import { validateOptions } from './helpers';
import {
    TASK_MANAGER_DEFAULT_RESPONSE_STATUS,
    QUEUE_HANDLER_TICK_EVENT_NAME,
    QUEUE_HANDLER_EVENT_TIMEOUT_VALUE
}  from './defaults';

export class TaskManager {

    private queue: TTask [] = [];
    private queueManager: QueueManager;

    constructor (options: TTaskManagerOptions) {
      validateOptions(options);
      this.queueManager = new QueueManager({
            queue: this.queue,
            taskHandlerContext: this,
            taskHandler: options.taskHandler,
            successCallback: options.successCallback,
            errorCallback: options.errorCallback,
            tickEventName: QUEUE_HANDLER_TICK_EVENT_NAME,
            eventEmitTimeoutValue: options.eventEmitTimeoutValue || QUEUE_HANDLER_EVENT_TIMEOUT_VALUE
        });
        this.queueManager.start();
    }

    public addTask(task: TTask): TTaskManagerResponse  {
        this.queue.push(task);
        return { status: TASK_MANAGER_DEFAULT_RESPONSE_STATUS, data: { scheduled: new Date().getTime() } };
    }
}
