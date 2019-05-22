const articleService = require('../ArticleService.js');

describe('ArticleService', () => {
    const testArticle = {
        title: "Test Service Title",
        description: "Some description",
        author: "TEST",
        tags: "some tags"
    };

    beforeEach(async (done) => {
        await articleService.createArticle(testArticle);
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
        let articles = await articleService.getArticlesByTitle(testArticle.title);
        let article = articles[0];

        article.tags += ",tags";
        let result = await articleService.updateArticle(article.id, article);
        expect(result).toBe(1);

        let updatedArticle = await articleService.getArticle(article.id);
        expect(updatedArticle.tags).toBe(article.tags);

        done();
    });

    it('delete article', async (done) => {
        let articles = await articleService.getArticlesByTitle(testArticle.title);
        let article = articles[0];

        let result = await articleService.deleteArticle(article.id);
        expect(result).toBe(1);

        article = await articleService.getArticle(article.id);
        expect(article).toBeUndefined();
        done();
    });

    it('load article by id', async (done) => {
        let article = await articleService.getArticle(1);
        expect(article.id).toBe(1);
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
        const results = await articleService.getArticlesByTitle(testArticle.title);
        for (i = 0; i < results.length; i++) {
          await articleService.deleteArticle(results[i].id);
        }
    
        await articleService.cleanUp();
        done();
    });
});