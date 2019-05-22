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
        await pool.query(
            'DELETE FROM challenge.article WHERE author = $1', [author]);

        for (let i = 0; i < count; i++) {
            await client.query(
                'INSERT INTO challenge.article (title, description, author, tags, created_at, updated_at) ' +
                'VALUES ($1, $2, $3, $4, now(), now())',
                [`${testArticle.title} ${i}`, testArticle.description, author, testArticle.tags]);
        }

        let results = await client.query(
            'SELECT * FROM challenge.article WHERE author = $1', [author]);

        await client.query('COMMIT')
        return results.rows;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}

const removeTestArticles = async (author) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')
        await pool.query(
            'DELETE FROM challenge.article WHERE author = $1', [author]);
        await client.query('COMMIT')
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }

}

module.exports = {
    generateTestArticles,
    removeTestArticles
}