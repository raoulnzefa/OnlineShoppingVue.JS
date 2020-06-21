let mongoose = require('mongoose'),
    mongoose_auto_inc = require('mongoose-auto-increment'),
    connection = mongoose.createConnection("mongodb://localhost:27017/OnlineShoppingVue",{useFindAndModify:false, useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true});

mongoose_auto_inc.initialize(connection);

let categorySchema = mongoose.Schema({
    MainCategory   : String,
    BranchCategory :String
});


categorySchema.plugin(mongoose_auto_inc.plugin,'Categories');
mongoose.model('Categories',categorySchema);