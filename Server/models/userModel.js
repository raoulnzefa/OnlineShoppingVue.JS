let  mongoose = require("mongoose")
    mongoose_auto_inc = require("mongoose-auto-increment"),
    connection = mongoose.createConnection("mongodb://localhost:27017/OnlineShoppingVue",{ useFindAndModify:false,useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true});

mongoose_auto_inc.initialize(connection);

let LoginSchema = mongoose.Schema({
    FullName : String,
    Email: String,
    Password:String,
    PhoneNumber:String,
    Gender:String,
    DOB:Date,
    Image:String


});

LoginSchema.plugin(mongoose_auto_inc.plugin,"Users")
mongoose.model("Users",LoginSchema);