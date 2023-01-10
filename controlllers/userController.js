const { render } = require("ejs")
const User = require("../models/user")
const Students = require("../models/studentSchema")

module.exports.profile = function(req, res){
    Students.find({} , function(err, students){
        if(err){
            console.log("Error in fetching")
            return
        }
        return res.render("homeProfile", {
            title: "Contact List",
            studentList : students
        })
    })
}


module.exports.deleteStudent = function(req, res){
    let id = req.query.id;

    Students.findByIdAndDelete(id, function(err){
        if(err){
            console.log("Error in deleting")
            return
        }
    })
    return res.redirect("back")
}

module.exports.signup = function(req, res){
    return res.render("userSignUp",{
        title: "Sign up"
    })
}

module.exports.signin = function(req, res){
    return res.render("userSignIn",{
        title: "Sign in"
    })
}

//making the sign up page working

module.exports.create = function(req, res){
    if (req.body.password != req.body.confirmPassword){
        return res.redirect("back")
    }
    User.findOne({email: req.body.email} , function(err, user){
        if(err){console.log("error in finging user"); return}
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log("error in creating")
                    return
                }
                return res.redirect("/users/signin")
            })
        }else{
            return res.redirect("back")
        }
    })
}

module.exports.createSession = function(req, res){
    //finding the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log("error in finging user in sign in"); return}
        //if user found

        if(user){
           if(user.password != req.body.password){
            return res.redirect("back")
           }

           res.cookie("user_id" , user.id);
           return res.redirect("/users/profile")
        }else{
            return res.redirect("back")
        }
    })

    


    //if not found
}

module.exports.students = function(req, res){
    return res.render("students", {
         title: "Add students", 
        })
}

