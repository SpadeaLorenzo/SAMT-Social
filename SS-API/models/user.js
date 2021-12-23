const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:6,
        max:20,
        unique: true
    },

    email : {
        type:String,
        required:true,
        min:6
    },

    password:{
        type:String,
        require:true,
        min: 8
    },

    profilePicture :{
        type:String,
        defaul:""
    },

    coverPicture :{
        type:String,
        defaul:""
    },

    followers:{
        type:Array,
        default:[]
    },

    following:{
        type:Array,
        default: []
    },

    isAdmin:{
        type: Boolean,
        default:false
    },

    desc:{
        type:String,
        max:50
    },
    city:{
        type: String,
        max:40
    },

    from:{
        type : String,
        max:40
    },

},
{timestamps:true}
);

module.exports = mongoose.model("User" , userSchema);