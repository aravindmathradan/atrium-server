const CustomAPIError = require('../utils/errors/custom-error');
const errorHandler = (err, req, res) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ message: err.message });
  }
  return res
    .status(500)
    .json({ message: 'Something went wrong. Please try again later...' });
};

module.exports = errorHandler;
