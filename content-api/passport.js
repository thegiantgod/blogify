const passport = require("passport");
const UserModel = require("./models/User");
const LocalStrategy = require("passport-local").Strategy;
 
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (username, password, done) {
      const user = await UserModel.findOne({ email: username, password });
      if (!user) {
        return done(null, false, { message: "Login is not valid." });
      }
      return done(null, user);
    }
  )
);
passport.serializeUser((user, done) => {
  console.log(user?.email);
  const session = { _id: user?._id, role: user?.role };
  done(null, session);
});
passport.deserializeUser(async (session, done) => {
  const user = await UserModel.findById(session?._id);
  if (!user) {
    done(err, user);
  }
  done(null, session);
});
 
module.exports = passport;