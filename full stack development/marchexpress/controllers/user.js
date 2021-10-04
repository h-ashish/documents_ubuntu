var User = require("../model/user");

const bcrypt = require("bcrypt")

// const auth = require("../middleware/auth");
const {body,validationResult} = require("express-validator")
const {sanitizeBody} = require("express-validator")
const jwt = require("jsonwebtoken")

exports.addUser = [
    body("username").isLength({min:3}).trim().withMessage("Min 3 char"),
    async function (req,res,next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.json({status:0,data:"validation failed",debug_data:errors.array()});
        }else{
            let user = await User.findOne({
                email:req.body.email
            });
            if (user) {
                return res.status(400).json({
                    msg:"User Already Exists"
                });
            }
            const salt = await bcrypt.genSalt(10);
            let encryptedPassword = await bcrypt.hash(req.body.password,salt);
            var userOb = new User({
                username:req.body.username,
                email:req.body.email,
                password:encryptedPassword,
            });
            userOb.save(function (err) {
                if (err) {
                    res.json({status:0,debug_data:err});
                }else{
                    res.json({status:1,data:"user saved successfully!"})
                }
            })
        }
    }
]