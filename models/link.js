import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
    link: {
        type: String, 
        required:true
    },
    shorten_link: {
        type: String,
        required:true
    }
})

const Link = mongoose.model("Link", linkSchema);

export default Link;