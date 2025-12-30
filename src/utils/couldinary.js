import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'


cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET
      });

      const uploadOnCloudinary = async (loacalFilePath) => {
        try {
            if(!loacalFilePath) return null
            // agar path hai to file upload kroo
          const response = await cloudinary.uploader.upload(loacalFilePath, {
                resource_type:'auto'
            })
            // console krleeeeeinn ab
            // console.log('file is uploaded on cloudinary', response.url)
            fs.unlinkSync(loacalFilePath)
          
            return response;

        } catch (error) {
            // remove the locally saved temp file uploaddd opreation faileeddd
            fs.unlinkSync(loacalFilePath) 
        }
      }


      export {uploadOnCloudinary}