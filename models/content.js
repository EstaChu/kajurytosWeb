/*
 * Content handler
 */

function ContentHandler(){
  
  this.spawn = function(req, res, next){
    return res.render('spawn');
  };

  this.servidor = function(req, res, next){
    return res.render('servidor');
  };

  this.normas = function(req, res, next){
    return res.render('normas');
  };

  this.notFound = function(req, res, next){
    return res.send(404, '404'); //res.render('404'));
  };
}

module.exports = ContentHandler;