
var seckeyenc = 'oMF81IOFsZ0bvzSdcBVr';

module.exports = function (req, res, next) {

   //first step: validate token
   console.log(req.sessionID);
   console.log("\n\n");
   var validated = false;

   var tok = jwt.decode(req.session.authtoken, seckeyenc);

   if (tok.hasOwnProperty("ip")) {
      if (tok.ip == req.connection.remoteAddress) {
         validated = true;
      }
   }

   //proceed only if validated
   if (validated) {
<<<<<<< HEAD
      req.session.accept = false;
=======
      //req.session.accept = false;
>>>>>>> dev_demo2

      var linkg = req.session.redURL + "?OUST=" + req.session.token + "?ERROR=error_permissions";
      res.send(linkg);
   }
<<<<<<< HEAD
}
=======
};
>>>>>>> dev_demo2
