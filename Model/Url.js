const {Schema,model}=requir("mongoose");
const UrlSchema=new Schema({
        urlCode:String,
        longUrl:String,
        shortUrl:String,
},
{timestamps:true}
);
module.exports=mongoose.model("Url",UrlSchema);