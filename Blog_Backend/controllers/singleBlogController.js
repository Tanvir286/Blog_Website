const blogModel = require("../models/blogModel");

const singleBlogController = async (req, res) => {
   
   let {param} = req.params; 

   let data = await blogModel.find({title:param})
   res.send(data)

}; 

module.exports = singleBlogController;

  