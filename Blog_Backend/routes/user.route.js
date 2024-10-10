
const registrationController = require('../controllers/registrationController');
const loginController = require('../controllers/loginController');
const createBlogController = require('../controllers/createBlogController');
const emailVerify = require('../controllers/emailVerify');
const upload = require('../helpers/imageUploder');
const secureApi = require('../middlewares/secureApi');
const allBlogController = require('../controllers/allBlogController');
const singleBlogController = require('../controllers/singleBlogController');


const router = require("express").Router();


// Routes
router.post('/registration',registrationController);
router.post('/emailVerify/:token',emailVerify);
router.post('/login',secureApi,loginController);
router.post('/createBlog', upload.single('image'), createBlogController);
router.get("/allblog",allBlogController);
router.get("/singleblog/:param",singleBlogController);

module.exports = router;   