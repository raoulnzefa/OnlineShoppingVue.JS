let express = require("express"),
    mongoose = require("mongoose"),
    authrouter = express.Router(),
    path =  require("path");

    require(path.join(__dirname,"..","models","userModel"));
    authSchema = mongoose.model("Users");


authrouter.route("/userData")
            // to login
            .get((request,response)=>{
               authSchema.find({}).then((data)=>{   
                response.send(data);
            }).catch((error)=>response.send("error"));
            })
            // to register
            .post((request,response)=>{
                let User = new authSchema({
                    FullName:request.body.FullName,
                    Email :request.body.Email,
                    Password:request.body.Password,
                    PhoneNumber:request.body.PhoneNumber,
                    Gender : request.body.Gender,
                    DOB : request.body.DOB,
                    Image : "image"
                });
                User.save().then((data)=>{
                    response.send(data);
                })
                .catch((error)=>response.send("error"));
            })
            // to edit basic information
            .put((request,response)=>{

            })
            // to delete user account
            .delete((request,response)=>{

            });


module.exports= authrouter;
