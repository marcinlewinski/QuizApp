const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require("mongoose");
const Account = require('./models/account');
const passport = require('passport');
require('dotenv').config();

passport.use(new GoogleStrategy({
  clientID: process.env.NODE_ENV_GOOGLE_CLIENT_ID,
  clientSecret: process.env.NODE_ENV_GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  passReqToCallback: true
},

  async function (req, accessToken, refreshToken, email, cb) {
    try {
      const userEmail = email.emails[0].value;
      let user = await Account.findOne({ email: userEmail });
      if (!user) {
        user = await Account.create({ email: userEmail });
      }
      req._user = user.email;
      return cb(null, user);
    } catch (error) {
      console.log(error)
    }
  }
));

passport.serializeUser(function (user, done) { done(null, user.id) })
passport.deserializeUser(async function (id, done) {
  try {
    const user = await Account.findOne({ id });
    done(null, user);
  } catch (error) {
    console.log(error)
  }
})