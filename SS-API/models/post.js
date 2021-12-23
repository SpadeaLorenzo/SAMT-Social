const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },

    desc:{
        type:String,
        max: 50
    },

    img:{
        type:String
    },
    
    likes:{
        type:Array,
        defaul: []
    },
},

{timestamps:true},
);

module.exports = mongoose.model("Post", postSchema);
