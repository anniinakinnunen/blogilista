const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

blogSchema.set('toJSON', {
  transform: (document, retunedObject) => {
    retunedObject.id = retunedObject._id.toString()
    delete retunedObject._id
    delete retunedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)