const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const LikedPostsSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
   
  },
  likedBy: {
    type: Types.ObjectId,
    ref: 'User', // Refers to a User collection
    required: true,
  },
  likedAt: {
    type: Date,
    default: Date.now,
  },
});

// Index to speed up queries involving imageUrl and likedBy
LikedPostsSchema.index({ imageUrl: 1, likedBy: 1 }, { unique: true });

const LikedPosts = mongoose.model('LikedPosts', LikedPostsSchema);

module.exports = LikedPosts;
