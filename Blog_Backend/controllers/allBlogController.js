const blogModel = require("../models/blogModel");




const allBlogController = async (req, res) => {
  
   let data = await blogModel.find({})
   res.send(data)

}; 

module.exports = allBlogController;

