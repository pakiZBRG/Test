const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.createAccount = (req, res) => {
    const { username, email, password } = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({ error: firstError })
    }

    User.find({email})
        .then(user => {
            if(user.length > 0){
                return res.status(409).json({ error: "Email exists" })
            } else {
                bcrypt.hash(password, 10, (err, hash) => {
                    if(err){
                        return res.status(500).json({error: err.message})
                    } else {
                        const newUser = new User({
                            username,
                            email,
                            password: hash
                        });

                        newUser.save()
                            .then(() => res.status(201).json({message: "User created"}))
                            .catch(err => res.status(500).json({error: err.message}))
                    }
                });
            }
        });
}

exports.login = (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        const firstError = errors.array().map(error => error.msg)[0]
        return res.status(422).json({error: firstError})
    }

    User.findOne({email})
        .then(user => {
            // No user
            if(!user){
                return res.status(409).json({ error: "Invalid credentials" })
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if(err){
                    return res.status(401).json({ error: "Invalid credentials" })
                }
                if(result){
                    const token = jwt.sign(
                        { userId: user._id },
                        process.env.JWT_SECRET,
                        { expiresIn: "1h" }
                    );
                    return res.status(200).json({
                        message: "Signin successful",
                        token,
                        user: {
                            id: user._id,
                            username: user.username,
                        }
                    })
                } else {
                    return res.status(401).json({ error: "Invalid credentials" })
                }
            })
        })
        .catch(err => res.status(500).json({error: err.message}))
}