var express = require('express');
var router  = express();

var path    = require('path');
var https   = require('https');
var jwt     = require('jwt-simple');

var loginAction       = require('./login')
var accountAction     = require('./account')
var permissionsAction = require('./permissions')
var createAction      = require('./create')
var acceptAction      = require('./accept')
var cancelAction      = require('./cancel')
var logoutAction      = require('./logout')
<<<<<<< HEAD
=======
var permdeniedAction  = require('./permsDenied')
>>>>>>> dev_demo2


router.get('/account',     accountAction)
router.post('/login',      loginAction)
router.get('/permissions', permissionsAction )
router.post('/create',     createAction);
router.post('/accept',     acceptAction);
router.post('/cancel',     cancelAction);
router.get('/logout',      logoutAction);
<<<<<<< HEAD
=======
router.get('/permsDenied', permdeniedAction);

>>>>>>> dev_demo2


module.exports = router;
