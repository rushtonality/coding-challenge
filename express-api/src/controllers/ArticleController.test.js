const httpMocks = require('node-mocks-http');

const articleController = require('./ArticleController.js');
const testDataGenerator = require('../util/TestDataGenerator');

const AUTHOR = "ArticleController";
let testRecords = [];

describe('ArticleController', () => {
  const testArticle = {
    title: "Test Controller Title",
    description: "Some description",
    author: AUTHOR,
    tags: "some tags, 12323"
  };

  beforeAll(async (done) => {
    testRecords = await testDataGenerator.generateTestArticles(AUTHOR, 10);
    done();
  });

  it('load by id', async (done) => {
    let targetArticle = testRecords.shift();

    const request = httpMocks.createRequest({
      method: 'GET',
      url: '/api/article/1',
      params: {
        articleId: targetArticle.id
      }
    });

    let response = httpMocks.createResponse();

    await articleController.getArticle(request, response, () => { });
    expect(response.statusCode).toBe(200);

    let article = response._getJSONData();
    expect(article.id).toBe(targetArticle.id);

    done();
  });

  it('create article', async (done) => {
    const request = httpMocks.createRequest({
      method: 'POST',
      url: '/api/article',
      body: testArticle
    });

    const response = httpMocks.createResponse();
    await articleController.createArticle(request, response, () => { });

    expect(response.statusCode).toBe(201);
    done();
  });

  it('update article', async (done) => {
    let targetArticle = testRecords.shift();
    targetArticle.tags += ",tags";

    const request = httpMocks.createRequest({
      method: 'PUT',
      url: `/api/article/${targetArticle.id}`,
      params: {
        articleId: targetArticle.id
      },
      body: targetArticle
    });

    let response = httpMocks.createResponse();

    await articleController.updateArticle(request, response, () => { });
    expect(response.statusCode).toBe(204);

    const updatedArticle = await loadArticle(targetArticle.id);
    expect(updatedArticle.id).toBe(targetArticle.id);
    expect(updatedArticle.tags).toBe(targetArticle.tags);

    done();
  });

  it('delete article', async (done) => {
    let targetArticle = testRecords.shift();
    targetArticle.tags += ",tags";

    const request = httpMocks.createRequest({
      method: 'DELETE',
      url: `/api/article/${targetArticle.id}`,
      params: {
        articleId: targetArticle.id
      }
    });

    let response = httpMocks.createResponse();

    await articleController.deleteArticle(request, response, () => { });
    expect(response.statusCode).toBe(204);

    const deletedArticle = await loadArticle(targetArticle.id);
    expect(deletedArticle).toBeUndefined();

    done();
  });

  it('load articles', async (done) => {
    const request = httpMocks.createRequest({
      method: 'GET',
      url: `/api/article`
    });
    let response = httpMocks.createResponse();

    await articleController.getArticles(request, response, () => { });
    expect(response.statusCode).toBe(200);

    let articles = response._getJSONData();
    expect(articles.length).toBeGreaterThan(1);
    done();
  });

  afterAll(async (done) => {
    await testDataGenerator.deleteTestArticles(AUTHOR);

    // Closing the DB connection allows Jest to exit successfully.
    await articleController.cleanUp();
    done();
  });

});


const loadArticle = async (id) => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: `/api/article/${id}`,
    params: {
      articleId: id
    }
  });

  let response = httpMocks.createResponse();

  await articleController.getArticle(request, response, () => { });

  if (response.statusCode < 300) {
    return response._getJSONData();
  }

  return undefined;
}