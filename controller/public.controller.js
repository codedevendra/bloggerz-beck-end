const ImageSchema = require("../models/image");
const categorySchema = require("../models/category");
const blogSchema=require("../models/blog");
exports.getPhotos = async (req, res, next) => {
  ImageSchema.find({}, (err, doc) => {
    if (doc) {
      res.json({ images: doc });
    } else {
      res.status(403).json({ images: [] });
    }
  });
};

exports.getCategories = async (req, res, next) => {
  await categorySchema.find({}, (err, doc) => {
    if (doc) {
      res.status(200).json({ categories: doc });
    } else {
      res.status(403).json({ error: "data not found" });
    }
  });
};

exports.getCategory = async (req, res, next) => {

  // req.params.id;
  await categorySchema.findOne({_id:req.params.id}, (err, doc) => {
    if (doc) {
      res.status(200).json({ category: doc });
    } else {
      res.status(403).json({ error: "data not found" });
    }
  });
};

exports.getBlogs=async (req,res,next)=>{

  blogSchema.find({},(err,doc)=>{
    if(doc)
    {
      res.status(200).json({data:doc});
    }else{

    }
  }).populate("category")

}

exports.getBlog=async (req,res,next)=>{

  blogSchema.findOne({_id:req.params.id},(err,doc)=>{
    if(doc)
    {
      res.status(200).json({data:doc});
    }else{

    }
  }).populate("category")

}