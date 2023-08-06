const mongoose = require('mongoose')
const Schema = mongoose.Schema
const schemaOptions = {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const blogDataScehma = new Schema({
    id: String,
    type: String,
    data:Object
  }, { _id: false });
  
const Blog = new Schema({
  blog_data:[blogDataScehma],
  name:String,
  status: String,
}, schemaOptions)

module.exports = mongoose.model('Blog', Blog)