
<<<<<<< HEAD
=======
var jwt2       = require('jwt-simple');
>>>>>>> dev_demo2
var seckeyenc = 'oMF81IOFsZ0bvzSdcBVr';

module.exports = function (req, res, next) {

   //first step: validate token
   console.log(req.sessionID);
   console.log("\n\n");
   var validated = false;


<<<<<<< HEAD
   var tok = jwt.decode(req.session.authtoken, seckeyenc);
=======
   var tok = jwt2.decode(req.session.authtoken, seckeyenc);
>>>>>>> dev_demo2

   if (tok.hasOwnProperty("ip")) {
      if (tok.ip == req.connection.remoteAddress) {
         validated = true;
      }
   }

   //proceed only if validated
   if (validated) {
      req.session.destroy();
      res.send("OK")
   }
}