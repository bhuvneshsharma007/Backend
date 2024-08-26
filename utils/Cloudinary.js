import {v2 as cloudinary} from "cloudinary" 
import fs from "fs"

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
        api_key: process.env.CLOUDNARY_API_KEY, 
        api_secret: process.env.CLOUDNARY_API_SECRET
    });


const uploadOnCloudnary = async (localFilePath)=>{
   try {
      if(!localFilePath) return null
      //upload the file on cloudinary
       const response = await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      //file has been sucessfully uploaded
      console.log("file has uploaded sucessfully",response.url);
      return response;
      
   } catch (error) {
    fs.unlinkSync(localFilePath)//remove the locally saved temoprary file as the uploadoperation got failed 
    return null;   
}
}

export {uploadOnCloudnary}