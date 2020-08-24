async function authenticationMiddleware () {
    return function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      res.json({"status":"401","message":"Unauthorized"})
    }
}

export default authenticationMiddleware