import { TTask } from '../types';

export interface IQueueManagerOptions {
    queue: TTask[],
    tickEventName: string,
    taskHandler: Function,
    successCallback: Function,
    errorCallback: Function,
    taskHandlerContext: any,
    eventEmitTimeoutValue: number
}
