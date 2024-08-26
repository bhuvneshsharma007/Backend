// const asyncHandler =(requestHandler)=>{
//  return (req,res,next)=>{
//     Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
//  } 
// }

// export {asyncHandler}


const asyncHandler =(fun)=> async(req,res,next)=>{
    try { 
        await fun(req,res,next)
    } catch (error) {
        res.error(err.code || 500).json({
            sucess:false,
            message:err.message
        })
    }
}
export {asyncHandler}