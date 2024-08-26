import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile:{
        type:String,//cloudinary url
        required:true,
    },thumbnail:{
        type:String,
        required:true,
    },owner:[
        {
            type:Schema.Type.ObjectId,
           ref:"User",
        }
    ],
    title:{
        type:String,
        require:true
    },discription:{
        type:String,
        require:true
    },view:{
        type:Number,
        default:0
    },duratration:{
     type:Number,
     required:true
    },isPublihsed:{
        type:boolean,
       default:true
    }

},{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema)