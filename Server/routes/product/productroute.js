let express = require('express'),
    path = require ('path'),
    productRouter = express.Router(),
    mongoose = require('mongoose'),
    multer = require('multer');

require(path.join(__dirname,'..','..','models','productModel','productModel.js'));
let productSchema = mongoose.model('product');

require(path.join(__dirname,'..','..','models','productModel','categoryModel.js'));
let categorySchema = mongoose.model('Categories');
//for recieve Image 
const DIR  = './public/upload/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => { cb(null, DIR);},
    filename: (req, file, cb) => {
      const fileName = file.originalname
      cb(null, fileName)
    } });
  // Multer Mime Type Validation
var upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" ||file.mimetype == "image/jfif"|| file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
    }
  });
// for product
productRouter.route('/products')
            .get((request,response)=>{
                productSchema.find({}).populate({path:'Category'}).then((data)=>{response.send(data);
                }).catch((err)=>console.log(err));
            })
            .post(upload.single('Image'),(request,response)=>{
                const URL  = request.protocol+'://'+request.get('host');
                let Data = JSON.parse(request.body.AllData);
                let sale;
                if (Data.Sale) sale = 'ON';
                else sale = 'OFF';
                let productObject = new productSchema({
                    Name : Data.Name,
                    Image : URL + '/public/upload/' + request.file.filename,
                    Price : Data.Price,
                    Quantity :Data.Quantity,
                    Description :Data.Description,
                    Sale : sale,
                    SaleAmount : Data.SaleAmount,
                    Category : Data.BranchCategory
                });
                productObject.save().then((data)=>response.send(data)). catch(err=>console.log(err));
           })
            .put(upload.single('Image'),(request,response)=>{
                const URL  = request.protocol+'://'+request.get('host');
                let Data = JSON.parse(request.body.AllData);
                productSchema.updateOne({_id:Data._id},{
                    $set:{
                        Name : Data.Name,
                        Image :  URL + '/public/upload/' + request.file.filename,
                        Price : Data.Price,
                        Quantity :Data.Quantity,
                        Description :Data.Description,
                        Sale : Data.Sale,
                        SaleAmount : Data.SaleAmount,
                        Category : Data.BranchCategory
                    }
                }).then((data)=>response.send(data)).catch((err)=>console.log(err));
            })
            .delete((request,response)=>{
                productSchema.deleteOne({_id:request.body._id})
                .then((data)=>response.send(data)).catch((err)=>console.log(err));
            });
// get Specific category
productRouter.get('/oneProduct/:_id',(request,response)=>{
    productSchema.findOne({_id:request.params._id}).populate({path:'Category'}).then((data)=>response.send(data)).catch((err)=>console.log(err));
});

//for categories of product
productRouter.route('/categories')
            .get((request,response)=>{
                categorySchema.find({}).then((data)=>{
                    response.send(data);
                }).catch((err)=>console.log(err));
            })
            .post((request,response)=>{
                let categoryObject = new categorySchema({
                    MainCategory : request.body.MainCategory,
                    BranchCategory :request.body.BranchCategory
                });
                categoryObject.save().then((data)=>response.send(data)).catch((err)=>console.log(err));
            })
            .put((request,response)=>{
                categorySchema.updateOne({_id:request.body._id},{
                    $set:{
                        MainCategory : request.body.MainCategory,
                        BranchCategory :request.body.BranchCategory
                    }
                }).then((data)=>response.send(data)).catch((err)=>console.log(err));
            })
            .delete((request,response)=>{// to delete product (which have the same categories) &  categories
                productSchema.deleteMany({Category:request.body._id}).then((data)=>console.log(data)).catch((err)=>console.log(err));
                categorySchema.deleteOne({_id:request.body._id})
                .then((data)=>response.send(data)).catch((err)=>console.log(err));
            });
// delete and change category of products
productRouter.put('/categoryChange',(request,response)=>{
    productSchema.updateMany({Category:request.body._idDelete},{
        $set:{Category:request.body._idUpdate}
    }).then((data)=>console.log(data)).catch((err)=>console.log(err));
    categorySchema.deleteOne({_id:request.body._idDelete})
    .then((data)=>response.send(data)).catch((err)=>console.log(err));
})
module.exports = productRouter; 