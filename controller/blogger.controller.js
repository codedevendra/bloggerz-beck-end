const Blogger = require("../models/category");
const ImageSchema = require("../models/image");
const blogSchema=require("../models/blog");

exports.addCategory = async (req, res, next) => {
  await Blogger.create(req.body, (error, doc) => {
    if (!doc) {
      res.status(403).json({ error: "something went wrong !" });
    }
    res.status(201).json({ message: "Category added successfully!" });
  });
};

exports.addPhotos = async (req, res, next) => {
  let body = { url: "images/" + req.files["blogImage"][0].filename };
  await ImageSchema.create(body, (error, doc) => {
    if (doc) {
      res.status(201).json({ message: "file uploaded successfully !" });
    } else {
      res.status(403).json({ message: "something went wrong !" });
    }
  });
};

exports.addBlog=async (req,res,next)=>{
  console.log(req.body)
  blogSchema.create(req.body,(error,doc)=>{
    if(doc)
    {
      res.status(201).json({message:"blog added successfully !"})
    }
    else{
      res.status(403).json({message:error})
    }
  })
}


