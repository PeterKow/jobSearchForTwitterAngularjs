/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

(function(){

  var qs = require('querystring');
  var request = require('request');


module.exports = {
  drawRoutes: function(app) {
    app.post('/login', function(req, res) {
      res.json({ message: 'logging in!' });
    });

    app.post('/logout', function(req, res) {
      res.json({ message: 'logging out!'});
    });

    app.get('/books', function (req, res) {
      res.json([
        {title: 'Great Expectations', author: 'Dickens'},
        {title: 'Foundation Series', author: 'Asimov'},
        {title: 'Treasure Island', author: 'Stephenson'}
      ]);
    });




    app.post('/search/twitter', function(req, res) {

      // console.log("stubbed request");
      // return res.status(200).send({
      //     message: getSearchTwitter()
      // });

      console.log(req.body);
      console.log("sdsd");

      // var url = 'https://api.twitter.com/1.1/users/show.json?';
      var url = 'https://api.twitter.com/1.1/search/tweets.json?';

      var params = {
        // user_id: profile.id
        // user_id: 'gopeterpanworld'
        // id: '210462857140252672'
        // screen_name: "rsarver"
        //q: "%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4"
        q: req.params
      };

      url += qs.stringify(req.body);

      console.log(url);


      // [ADDED] Twitter extended API calls using 'request' and 'querystring'
      var oauth = {
        consumer_key: 'cCQtvCWf3fGO32gUFPYM3hywq',
        consumer_secret: 'N3EuSzOD7v1iuQV7EIGlXWzPngd0OhqylwgrYCnBChuzFf2q7M',
        token: '1627149078-W11Zxz9Kffwf7sskctuhChgNKPxMzzavXarkM4k',
        token_secret: 'dfuTWCuExC145nbQQYNCmKPNlapxG6LFh7FKQPsoS0nwD'
      };


      request.get({
        url: url,
        oauth: oauth,
        json: true
      }, function(e, r, result) {

        console.log("result");
        console.log("result");
        // console.log(result);
        return res.status(200).send({
          message: result
        });
        // [MOVED] db.save moved into second callback function
        // user.save(function(err) {
        //   if (err)
        //     throw err;
        //   return done(null, user);
        // });
      });

    });

  }
};

}());