const pool = require('../db/pool');

const testArticle = {
    title: "Test Title",
    description: "Some description",
    tags: "some tags"
};

const generateTestArticles = async (author, count) => {

    const client = await pool.connect();

    try {
        await client.query('BEGIN')

        // Clean out old entries
        await deleteArticlesPrivate(client, author);

        for (let i = 0; i < count; i++) {
            await insertArticlePrivate(client, `${testArticle.title} ${i}`, 
                testArticle.description, author, testArticle.tags);
        }

        let rows = await findArticlesPrivate(client, author);

        await client.query('COMMIT')

        return rows;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}

const insertArticlePrivate = async (client, title, description, author, tags) => {
    await client.query(
        'INSERT INTO challenge.article (title, description, author, tags, created_at, updated_at) ' +
        'VALUES ($1, $2, $3, $4, now(), now())',
        [title, description, author, tags]);
}

const findTestArticles = async (author) => {
    const client = await pool.connect();
    return await findArticlesPrivate(client, author);
}

const findArticlesPrivate = async (client, author) => {
    let results = await client.query(
        'SELECT * FROM challenge.article WHERE author = $1', [author]);
    return results.rows;
}

const deleteTestArticles = async (author) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        await deleteArticlesPrivate(client, author);
        await client.query('COMMIT');
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }    
}

const deleteArticlesPrivate = async (client, author) => {
    await pool.query(
        'DELETE FROM challenge.article WHERE author = $1', [author]);
}

module.exports = {
    findTestArticles,
    generateTestArticles,
    deleteTestArticles
}