
var postScript = require('./postScript')
var seckeyenc  = 'oMF81IOFsZ0bvzSdcBVr';
var jwt        = require('jwt-simple');

module.exports = function (req, res, next) {
   // post permissions to openi

   //first step: validate token
   console.log(req.sessionID);
   console.log("\n\n");
   var validated = false;

   var tok = jwt.decode(req.session.authtoken, seckeyenc);

   if (tok.hasOwnProperty("ip")) {
      if (tok.ip == req.headers['x-forwarded-for'] || req.connection.remoteAddress) {
         validated = true;
      }
   }

    
    <<<<<<< HEAD
   console.log("validated", validated)
=======
   console.log("validated", validated);
>>>>>>> dev_demo2

   //proceed only if validated
   if (validated) {

<<<<<<< HEAD
      req.session.accept = true;
=======
      //req.session.accept = true;
>>>>>>> dev_demo2

      var path = "/api/v1/permissions";

      //prepare the data to send to OPENi

<<<<<<< HEAD
      var data = JSON.parse(req.session.appPerms)
=======
      var data = JSON.parse(req.session.appPerms);
>>>>>>> dev_demo2

      var redurl = req.session.redURL;
      var toki   = req.session.token;

      var headi = {
         "Authorization": toki
      };

      postScript("POST", data, path, headi, function (datat) {
         //success: send url so that client redirects
         // redirect to redirectURI only if there is no error

         if (typeof datat.error == 'undefined') {
            var nexttt = redurl + "?OUST=" + toki;
            res.send(nexttt);
         } else {
            res.send(datat.error);
         }
      }, function () {
         res.status(500).send('OPENi Internal error: accepting permissions failed');
      });
   } else {
      //jwt auth failed
      res.status(401).send('Authentication failed')
   }
}