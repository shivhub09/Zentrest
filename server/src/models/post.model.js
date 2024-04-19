const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    postFile:{
        type:String, //cloudindary url
        required:true,
    },
    description:{
        type:String, 
        required:true,
    },
    isGenerated:{
        type:Boolean,
        default:false,
    },
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
},{
    timestamps: true
});


module.exports = mongoose.model("Posts", postSchema);