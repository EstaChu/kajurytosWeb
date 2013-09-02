/*################################################
 * kajuryto.com Minecraft Comunity
 *################################
 *
 *@Version: v0.0.1
 *@Author: Jose Florian Gonzalez Krause <jflokg@gmail.com>
 *@Date: 12/07/13
 *@License: Licensed under the Apache License, Version 2.0: http://www.apache.org/licenses/LICENSE-2.0
 *
 *
 * - TODO: Tutorials section.
 * - TODO: Server ranking.
 * - TODO: News.
 * - TODO: Hystories.
 * - TODO: Blog / community
 ################################################*/

var express = require('express')
  , router = require('./controllers')
  , app = express();


/*
 * App configuration
 */
app.set('views',__dirname + '/views');
app.set('view engine', 'jade');

//app.use(express.logger('dev'));
app.use(express.static(__dirname + '/static'));

/*
 * Route dispatcher
 */
router(app);

/*
 * Socket listener
 */ 
app.listen(8000);
console.log('Server started at localhost on port 8000');
