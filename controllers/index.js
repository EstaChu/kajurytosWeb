/*
 * Router
 */

var ContentHandler = require('../models/content')
  , ErrorHandler = require('./error').errorHandler;



module.exports = exports = function(app){

  var contentHandler = new ContentHandler();

  app.get('/', contentHandler.spawn);

  app.get('/servidor', contentHandler.servidor);

  app.get('/normas', contentHandler.normas);

  // Not Found handler
  app.use(contentHandler.notFound);

  // Error handling middleware
  app.use(ErrorHandler);

}