// models/Category.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  news: [{
    type: Schema.Types.ObjectId,
    ref: 'News'
  }]
});

module.exports = mongoose.model('Category', CategorySchema);
