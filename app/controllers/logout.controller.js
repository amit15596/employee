async function logout(req, res) {
    req.logout()
    res.redirect("/")
}

export default { logout }
