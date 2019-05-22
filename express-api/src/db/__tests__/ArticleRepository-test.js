const articleRepository = require('../articleRepository.js');

describe('ArticleRepository', () => {
  const testTitle = "My Test Title";
  beforeEach(async (done) => {
    await articleRepository.createArticle(
      testTitle, "Some Description", "ME", 'good, stuff');
    done();
  });

  it('create article', async (done) => {
    let result = await articleRepository.createArticle(
      testTitle, "Some Description", "ME", 'good, stuff');

    expect(result).toBe(1);
    done();
  });

  it('update article', async (done) => {
    let articles = await articleRepository.getArticlesByTitle(testTitle);
    let article = articles[0];
    let result = await articleRepository.updateArticle(article.id,
        article.title, article.description, article.author, `${article.tags},tag2`);

    expect(result).toBe(1);
    done();
  });  

  it('delete article', async (done) => {
    let articles = await articleRepository.getArticlesByTitle(testTitle);
    let article = articles[0];
    let result = await articleRepository.deleteArticle(article.id);    
    expect(result).toBe(1);

    article = await articleRepository.getArticleById(article.id);
    expect(article).toBeUndefined();
    done();
  });

  it('load article by id', async (done) => {
    let article = await articleRepository.getArticleById(1);
    expect(article.id).toBe(1);
    done();
  });

  it('load articles', async (done) => {
    let articles = await articleRepository.getArticles();
    expect(articles.length).toBeGreaterThan(1);
    expect(articles.length).toBeLessThanOrEqual(
      articleRepository.DEFAULT_MAX_RESULT_SIZE);
    done();
  });

  afterAll(async (done) => {
    const results = await articleRepository.getArticlesByTitle(testTitle);
    for (i = 0; i < results.length; i++) { 
      await articleRepository.deleteArticle(results[i].id);
    }

    // Closing the DB connection allows Jest to exit successfully.
    await articleRepository.cleanUp();
    done();
  });  

});