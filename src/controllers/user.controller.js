import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(asyncHandler(async(req, res)=>{
    res.status(200).json({
        message:'ok'
    })
}))

export {registerUser}