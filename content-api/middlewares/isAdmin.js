function isAdmin(req, res, next) {
    const {role, _id} = req.user;

    if (role.toLowerCase() || "Admin".toLowerCase()) {
        return next();
    }
    return res.status(403).send("Forbidden");
}

module.exports = isAdmin;
