const joi = require('joi');
const { eventName, interval } = require('./constants');

const optionsSchema = joi.object({
  interval: joi.number().positive().integer().allow(null)
    .default(interval),
  tickEvent: joi.string().allow('', null).empty(['', null])
    .default(eventName),
  handlers: joi.array().items(joi.func()).required(),
  data: joi.any().required(),
});

module.exports = options => optionsSchema.validate(options);
