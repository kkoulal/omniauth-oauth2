// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var passport = require('passport');
// var Strategy = require('passport-twitter').Strategy;
// var session = require('express-session');
// var FortyTwoStrategy = require('passport-42').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var port = process.env.PORT || 8080



// ////////////////////////////////////twitter/////////////////////////////////////////
// passport.use(new Strategy({
//     consumerKey: 'YXDPAH8dBMD9N5p6G8GQvRwse',
//     consumerSecret: 'pRcUgpbv7bP7oQHTAtgIIm9D9m55z6Fb53NrLC5fBkJtTg6oU9',
//     callbackURL: 'http://localhost:8080/profile'
// }, function(token, tokenSecret, profile, callback) {
//     return callback(null, profile);
// }));

// passport.serializeUser(function(user, callback) {
//     callback(null, user);
// })

// passport.deserializeUser(function(obj, callback) {
//     callback(null, obj);
// })

// //////////////////////////////////////42///////////////////////////////////////////

// passport.use(new FortyTwoStrategy({
//     clientID: 'e4068746ca651b7eb182962453edb482ae1fb31af5fb31cd0295b3ef56b2a2fe',
//     clientSecret: '2c340958c497b25ab0c973244a74c5e50da78bca3ef31ad73734fd9bb3d51ec3',
//     callbackURL: "http://localhost:8080/profile"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ fortytwoId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
// ///////////////////////////////////////////////////////////////////////////////////////
// var app = express();
// // app.set('view engine', 'ejs');
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'jade');
// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({secret: 'whatever', resave: true, saveUninitialized: true}))

// app.use(passport.initialize())
// app.use(passport.session())


// app.get('/profile',(req, res) =>{
//   // console.log(user.username);
//     res.render('profile',{user: req.user});
// })

// app.get('/index',(req, res) =>{
    

//     res.render('index', {user: req.user});
// })
// ////////////////////////////////////twitter/////////////////////////////////////////////
// app.get('/twitter/login', passport.authenticate('twitter'))

// app.get('/twitter/return', passport.authenticate('twitter', {
//     failureRedirect: '/'
// }), function(req, res) {
//     res.redirect('/')
// })
// ////////////////////////////////////twitter/////////////////////////////////////////////


// ////////////////////////////////////42/////////////////////////////////////////////
// app.get('/42/login',passport.authenticate('42'));

// app.get('/auth/42/callback',
//   passport.authenticate('42', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.

//     res.redirect('/');
//   });
// ////////////////////////////////////42/////////////////////////////////////////////
// app.listen(port, function() {
// 	console.log("Server is running on port: " + port)
// })

// module.exports = app;

/////////////////////////////////

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var session = require('express-session');
var port = process.env.PORT || 8080

passport.use(new Strategy({
  consumerKey: 'YXDPAH8dBMD9N5p6G8GQvRwse',
  consumerSecret: 'pRcUgpbv7bP7oQHTAtgIIm9D9m55z6Fb53NrLC5fBkJtTg6oU9',
  callbackURL: 'http://localhost:8080/profile'
}, function(token, tokenSecret, profile, callback) {
    return callback(null, profile);
}));

passport.serializeUser(function(user, callback) {
    callback(null, user);
})

passport.deserializeUser(function(obj, callback) {
    callback(null, obj);
})

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'whatever', resave: true, saveUninitialized: true}))

app.use(passport.initialize())
app.use(passport.session())

// 

app.get('/', function(req, res) {
    res.render('index', {user: req.user})
})

app.get('/twitter/login', passport.authenticate('twitter'))

app.get('/twitter/return', passport.authenticate('twitter', {
    failureRedirect: '/'
}), function(req, res) {
    res.redirect('/')
})

app.listen(port, function() {
	console.log("Server is running on port: " + port)
})

module.exports = app;