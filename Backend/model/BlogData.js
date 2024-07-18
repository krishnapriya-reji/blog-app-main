const mongoose=require('mongoose');
    const schema = mongoose.Schema({
        title:String,
        post:String,
        image:String,
        createAt:{
            type:Date,
            default:new Date(),
        }
    })

    const BlogData = mongoose.model('blogdata',schema);
    module.exports = BlogData;