
//What do I want to do
const dotenv = require('dotenv')

dotenv.config() // This is required so we can get the info inside .env
function verifyApiKey(req,res,next) {

    //Get api key 
    const apiKey = req.header('web-api-key')
    //Check if it's the same as the api key in .env
    if (apiKey == null) {
        return res.status(401).json({message: "Access Denied. No api-key provided"})
    }
    //If so, then continue the request, otherwise send an error 

    if (apiKey === process.env.API_KEY){
        next()
    }
    else {
        return res.status(403).json({message: "Access Denied. Invalid api-key"})

    }
}

//Export function
module.exports = {verifyApiKey: verifyApiKey}