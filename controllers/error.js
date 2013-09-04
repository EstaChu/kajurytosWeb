/*
 * Error handling middleware
 */

exports.errorHandler = function(err, req, res, next){
  console.error(err.message);
  console.error(err.stack);
  res.status(500);
  res.render('error_template', {message: err.message, stack: err.stack});
}