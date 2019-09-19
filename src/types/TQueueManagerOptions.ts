import { TTask } from 'TTask';

export type TQueueManagerOptions = {
    queue: TTask[],
    tickEventName: string,
    taskHandler: Function,
    successCallback: Function,
    errorCallback: Function,
    taskHandlerContext: any,
    eventEmitTimeoutValue: number
}
