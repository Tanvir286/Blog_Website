


let secureApi = (req,res,next) =>{

    let pass = req.headers.authorization;
     
    if(pass == process.env.SECURE_API_KEY){
        next()
    }
    else{
        res.send({message:"Unauthorized access"})
    } 

}

module.exports = secureApi;
 