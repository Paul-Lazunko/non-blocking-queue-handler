import { TTask } from 'TTask';
import { TTaskManagerResponse } from 'TTaskManagerResponse';

export type TTaskManagerOptions = {
  eventEmitTimeoutValue: number
  taskHandler (task: TTask): TTaskManagerResponse
  errorCallback (error: Error): TTaskManagerResponse
  successCallback (data: any): TTaskManagerResponse
}
