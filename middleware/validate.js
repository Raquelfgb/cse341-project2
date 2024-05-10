const validator = require('../helpers/validate');

const client = (req, res, next) => {
  const validationRule = {
    "first name": 'required|string',
    "last name": 'required|string',
    email: 'required|email',
    gender: 'required|string',
    birthday: 'string',
    address: 'string',
    phone: 'string'
  };
 

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const store = (req, res, next) => {
  let passValidation = true;
  const validationRule = {
    clientIds: 'array'
  }

  req.body.clientIds.map(id => {
    passValidation = (typeof id === 'string' || myVar instanceof String) ?
      true : false;
  });
 


  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};



module.exports = {
  client,
  store
};