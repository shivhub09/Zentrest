const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,
    
    },
    
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },



    profilePhoto: {
        type: String,
        required: true,

    },

    password: {
        type: String,
        required: [true, "Password is required"]
    },

    refreshToken: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        return next();
    }

    this.password = await bcrypt.hash(this.password, 10); // Corrected bcrypt.hash usage
    next();
});

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);