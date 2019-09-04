import joi from 'joi';

const taskManagerOptionsSchema = joi.object({
  taskHandler: joi.func().required(),
  errorCallback: joi.func().required(),
  successCallback: joi.func().required(),
  eventEmitTimeoutValue: joi.number().positive().integer()
});

export function validateOptions(options: any) {
  const { error } = taskManagerOptionsSchema.validate(options);
  if ( error ) {
    throw new Error(error.toString());
  }
}
