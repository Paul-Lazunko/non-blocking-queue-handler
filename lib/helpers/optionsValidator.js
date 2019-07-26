const joi = require('joi');

const optionsSchema = joi.object({
  interval: joi.number().positive().integer().min(0)
    .required(),
  tickEvent: joi.string().required(),
  handler: joi.func().required(),
  data: joi.any().required(),
});

module.exports = options => optionsSchema.validate(options);
