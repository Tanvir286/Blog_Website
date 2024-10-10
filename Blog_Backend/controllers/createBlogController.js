
const Blog = require('../models/blogModel');

const createBlogController = async (req, res) => {
  
    const { title, description , tags } = req.body;

    console.log(`/uploads/${req.file.filename}`);
    

    const convertArray = tags.split('');
     
     const createBlog = new Blog({
        title: title,
        description: description,
        tags: convertArray,
        image:`/uploads/${req.file.filename}`
    });
    
    createBlog.save();
    res.send({messages:"Blog created successfully"})

}; 

module.exports = createBlogController;

