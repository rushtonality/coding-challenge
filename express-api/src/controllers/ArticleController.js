const articleService = require('../services/ArticleService')

const getArticles = async (req, res, next) => {  
  try {
    const offset = parseInt(req.query.offset);

    const articles = await articleService.getArticles(offset);

    res.status(200).json(articles);

    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
}

const getArticle = async (req, res, next) => {  
  try {
    const id = parseInt(req.params.articleId);
    const article = await articleService.getArticle(id);

    if (article) {
      res.json(article, 200);
    }
    else {
      res.sendStatus(404);
    }

    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
}

const createArticle = async (req, res, next) => {
  try {
    const article = req.body;

    await articleService.createArticle(article);
    res.sendStatus(201);
    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
}

const updateArticle = async (req, res, next) => {
  try {
    const id = parseInt(req.params.articleId);
    const article = req.body;

    await articleService.updateArticle(id, article);
    res.sendStatus(204);
    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
}

const deleteArticle = async (req, res, next) => {
  try {
    const id = parseInt(req.params.articleId);

    await articleService.deleteArticle(id);
    res.sendStatus(204);
    next();
  } catch(e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
}

const cleanUp = async () => {
  await articleService.cleanUp();
}

module.exports = {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
  cleanUp
}