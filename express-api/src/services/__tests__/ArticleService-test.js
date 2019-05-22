const articleService = require('../ArticleService.js');
const testDataGenerator = require('../../util/TestDataGenerator');

describe('ArticleService', () => {
    const AUTHOR = "ArticleRepository";
    let testRecords = [];

    const testArticle = {
        title: "Test Service Title",
        description: "Some description",
        author: AUTHOR,
        tags: "some tags"
    };

    beforeAll(async (done) => {
        testRecords = await testDataGenerator.generateTestArticles(AUTHOR, 10);
        done();
    });

    it('get article by title', async (done) => {
        let result = await articleService.getArticlesByTitle(testArticle.title);
        done();
    });

    it('create article', async (done) => {
        let result = await articleService.createArticle(testArticle);
        expect(result).toBe(1);
        done();
    });

    it('update article', async (done) => {
        let article = testRecords.shift();

        article.tags += ",tags";
        let result = await articleService.updateArticle(article.id, article);
        expect(result).toBe(1);

        let updatedArticle = await articleService.getArticle(article.id);
        expect(updatedArticle.tags).toBe(article.tags);

        done();
    });

    it('delete article', async (done) => {
        let article = testRecords.shift();

        let result = await articleService.deleteArticle(article.id);
        expect(result).toBe(1);

        article = await articleService.getArticle(article.id);
        expect(article).toBeUndefined();
        done();
    });

    it('load article by id', async (done) => {
        let article = testRecords.shift();

        let foundArticle = await articleService.getArticle(article.id);
        expect(foundArticle.id).toBe(article.id);
        done();
    });

    it('load articles', async (done) => {
        let articles = await articleService.getArticles();
        expect(articles.length).toBeGreaterThan(1);
        expect(articles.length).toBeLessThanOrEqual(
            articleService.DEFAULT_MAX_RESULT_SIZE);
        done();
    });

    afterAll(async (done) => {
        await testDataGenerator.removeTestArticles(AUTHOR);

        // Closing the DB connection allows Jest to exit successfully.
        await articleService.cleanUp();
        done();
    });
});