
const Joi = require('joi')

exports.validatePostReflection = async (req, res, next) => {
    const schema = Joi.object().keys({
        success: Joi.string().required(),
        low_point: Joi.string().required(),
        take_away: Joi.string().required(),
    });
    if (schema.validate(req.body).error) {
        res.json({ error: schema.validate(req.body).error.message });
    } else {
        next();
    }
};

exports.verifyAuthReflecion = async (req, res, next) => {
}

exports.validatePutReflection = async (req, res, next) => {
    const schema = Joi.object().keys({
        success: Joi.string().required(),
        low_point: Joi.string().required(),
        take_away: Joi.string().required(),
    });
    if (schema.validate(req.body).error) {
        res.json({ error: schema.validate(req.body).error.message });
    } else {
        next();
    }
};