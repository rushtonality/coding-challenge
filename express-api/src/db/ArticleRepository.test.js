const articleRepository = require('./articleRepository');
const testDataGenerator = require('../util/TestDataGenerator');

const AUTHOR = "ArticleRepository";
let testRecords = [];

describe('ArticleRepository', () => {
  beforeAll(async (done) => {
    testRecords = await testDataGenerator.generateTestArticles(AUTHOR, 10);
    done();
  });

  it('create article', async (done) => {
    let result = await articleRepository.createArticle(
      "Test Title", "Some Description", AUTHOR, 'good, stuff');

    expect(result).toBe(1);
    done();
  });

  it('update article', async (done) => {
    let article = testRecords.shift();
    let result = await articleRepository.updateArticle(article.id,
        article.title, article.description, article.author, `${article.tags},tag2`);

    expect(result).toBe(1);
    done();
  });  

  it('delete article', async (done) => {
    let article = testRecords.shift();
    let result = await articleRepository.deleteArticle(article.id);    
    expect(result).toBe(1);

    article = await articleRepository.getArticleById(article.id);
    expect(article).toBeUndefined();
    done();
  });

  it('load article by id', async (done) => {
    let article = testRecords.shift();
    let foundArticle = await articleRepository.getArticleById(article.id);
    expect(foundArticle.id).toBe(article.id);
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
    await testDataGenerator.deleteTestArticles(AUTHOR);

    // Closing the DB connection allows Jest to exit successfully.
    await articleRepository.cleanUp();
    done();
  });  

});