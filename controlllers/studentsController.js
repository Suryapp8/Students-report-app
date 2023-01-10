const Students = require("../models/studentSchema")



module.exports.addstudents = function(req, res){
    Students.create({
        name: req.body.name,
        batch: req.body.batch,
        college: req.body.college,
        status: req.body.status,
        score: req.body.score,
        company: req.body.company,
        results: req.body.results
        
    }, function(err, newContact){
        if(err){
            console.log(err)
            return
        }
        console.log(newContact)
        return res.redirect("/users/profile")
    })
}


