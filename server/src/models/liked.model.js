const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const LikedPostsSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
   
  },
  likedBy: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likedAt: {
    type: Date,
    default: Date.now,
  },
});

LikedPostsSchema.index({ imageUrl: 1, likedBy: 1 }, { unique: true });

const LikedPosts = mongoose.model('LikedPosts', LikedPostsSchema);

module.exports = LikedPosts;
