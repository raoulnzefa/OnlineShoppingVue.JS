let mongoose = require('mongoose'),
    mongoose_auto_inc = require('mongoose-auto-increment'),
    connection = mongoose.createConnection("mongodb://localhost:27017/OnlineShoppingVue",{useFindAndModify:false, useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true});
mongoose_auto_inc.initialize(connection);

let productSchema = mongoose.Schema({
    Name : String,
    Image : String,
    Price : Number,
    Quantity :Number,
    Description :String,
    Sale : String,
    SaleAmount : Number,
    Category : {type :Number , ref:'Categories'}
});

productSchema.plugin(mongoose_auto_inc.plugin,'product');
mongoose.model('product' , productSchema);
