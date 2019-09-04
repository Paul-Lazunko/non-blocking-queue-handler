import { TTask } from 'TTask';
import { ITaskManagerResponse } from './ITaskManagerResponse';

export interface ITaskManagerOptions {
  eventEmitTimeoutValue: number
  taskHandler (task: TTask): ITaskManagerResponse
  errorCallback (error: Error): ITaskManagerResponse
  successCallback (data: any): ITaskManagerResponse
}
