const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
//env file contains different user pass for better sharing or ppublishing of files online without harming your personal database.
//env file can be used to store pass for different funcs. like mongodb and will also hide data from sharing globallly while 
//you are publishing your directory
const passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const user = require('./models/user');
const authRouter = require('./routes/auth');
const songRouter = require('./routes/song');
const playlistRouter = require('./routes/playlist');


app = express();
app.use(express.json());
app.use(cors())

// mongoose.connect('mongodb://localhost:27017').then((x)=>{
//     console.log("Connected to DB!");
// }).catch((err)=>{
//     console.log("Error while connecting to DB" + err);
// });


mongoose.connection.on('connected', () => console.log('DB connected'));
mongoose.connect('mongodb://127.0.0.1/spotifyclone');

//setting passport jwt
let opts = { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.secret_key_pass_jwt
};
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(
    'User authentication',
    new JwtStrategy(opts, function(jwt_payload, done) {
        user.findById(jwt_payload.identifier).then(user=>{

        if (!user) { return done(null, false); }
        // console.log(user._id);
        return done(null,user);
        }
        )
        .catch(err=>{
            return done(null,err)
        })
    }
));
// app.use(passport.initialize());
// app.use(passport.session())

app.listen(8000,(req,res)=>{
    console.log("App is running on http://localhost:8000/");
});

app.get('/',(req,res)=>{
    res.send('Hello')
});

app.use('/auth',authRouter);

//passport.authenticate, it authenticates the cureent user is legit or not, if he is then and only then afterprocess is done, 
//jwt is deafult value as we have not explicitly defined name of our jwt authentication strategy in index.js

app.use('/song', passport.authenticate("User authentication", {session: false}), songRouter);

app.use('/playlist', passport.authenticate("User authentication", {session: false}), playlistRouter);
