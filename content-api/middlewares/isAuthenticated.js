function isAuthenticated(req, res, next) {
    if (req.user) {
        return next();
    }

    res.status(401).send("User is not logged in");
}

module.exports = isAuthenticated;