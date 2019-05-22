const articleRepository = require('../db/ArticleRepository.js');

const DEFAULT_MAX_RESULT_SIZE = articleRepository.DEFAULT_MAX_RESULT_SIZE;

const createArticle = async (article) => {
  try {
    return await articleRepository.createArticle(
      article.title,
      article.description,
      article.author,
      article.tags
    )
  } catch (e) {
    throw new Error(e.message)
  }
}

const getArticle = async (id) => {
  try {
    return articleRepository.getArticleById(id);
  } catch (e) {
    throw new Error(e.message)
  }
}

const getArticlesByTitle = async (title) => {
  try {
    const results = articleRepository.getArticlesByTitle(title);
    return results;
  } catch (e) {
    throw new Error(e.message)
  }
}

const updateArticle = async (id, article) => {
  try {
    return await articleRepository.updateArticle(id,
      article.title,
      article.description,
      article.author,
      article.tags);
  } catch (e) {
    throw new Error(e.message)
  }
}

const deleteArticle = async (id) => {
  try {
    return await articleRepository.deleteArticle(id);
  } catch (e) {
    throw new Error(e.message)
  }
}

const getArticles = async () => {
  try {
    return await articleRepository.getArticles();
  } catch (e) {
    throw new Error(e.message)
  }
}

const cleanUp = async () => {
  await articleRepository.cleanUp();
}

module.exports = {
  DEFAULT_MAX_RESULT_SIZE,
  getArticle,
  getArticles,
  getArticlesByTitle,
  createArticle,
  updateArticle,
  deleteArticle,
  cleanUp
}