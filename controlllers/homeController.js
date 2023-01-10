const { render } = require("ejs")

module.exports.home = function(req, res){
    return res.render("home", {
        title : "Students Report"
    })
}