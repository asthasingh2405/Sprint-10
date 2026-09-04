const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  deletePost,
  getRecentPosts,
} = require('../controllers/postController');

// Route for Top 3 Recent Posts (Must be above /:id)
router.get('/recent', getRecentPosts);

router.route('/').post(createPost).get(getPosts);

router.route('/:id').delete(deletePost);

module.exports = router;