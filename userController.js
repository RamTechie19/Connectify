
const user = require('../models/userModels');
const bcrypt = require('bcrypt');

const registerLoad = async(req, res)=>{
    try{
        res.render('register');
    } catch(error) {
        console.log(error.message);
    }
}

const register = async(req,res)=>{
    try{
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            image: 'images/'+ req.file.filename,
            password:passwordHash
        });

        await user.save();

        res.render('register',{message:'Your Registration is Successfull!'});
        
    } catch(error) {
        console.log(error.message);
    }
}

module.exports = {
    registerLoad,
    register
}