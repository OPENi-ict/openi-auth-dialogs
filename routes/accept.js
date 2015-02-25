
var postScript = require('./postScript')
var seckeyenc  = 'oMF81IOFsZ0bvzSdcBVr';

module.exports = function (req, res, next) {
   // post permissions to openi

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

      req.session.accept = true;


      var path = "/api/v1/permissions";

      //prepare the data to send to OPENi
      var data = req.session.appPermJson;

      var redurl = req.session.redURL;
      var toki = req.session.token;

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