const express = require('express')
const router = express.Router()
const articleController = require('../controllers/ArticleController');

// Get List of Articles
router.get('/', articleController.getArticles);

// Create Article
router.post('/', articleController.createArticle)

// Get Article
router.get('/:articleId', articleController.getArticle)

// Update Article
router.put('/:articleId', articleController.updateArticle)

// Delete Article
router.delete('/:articleId', articleController.deleteArticle)

module.exports = router