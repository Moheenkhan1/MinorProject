module.exports.isLoggedIn =(req,res,next)=>{
    console.log(req.User);
    if(!req.isAuthenticated()){
        req.flash("failure", "You are not logged in");
        return res.redirect("/login");
    }
    next();
}