const pool = require('./pool');

const DEFAULT_MAX_RESULT_SIZE = 5;

const getArticleById = async (id) => {
    const client = await pool.connect();

    try {
        let results = await client.query(
            'SELECT * FROM challenge.article WHERE id = $1', 
            [id]);
        if (results.rowCount > 0) {
            return results.rows[0];
        }
        else {
            return undefined;
        }
    } catch (e) {
        throw e
    } finally {
        client.release()
    }
}

const getArticlesByTitle = async (title) => {
    const client = await pool.connect();

    try {
        let results = await client.query(
            'SELECT * FROM challenge.article WHERE title = $1', 
            [title]);
        return results.rows;
    } catch (e) {
        throw e
    } finally {
        client.release()
    }
}

const getArticles = async (offset, filter) => {
    let queryString = 
        'SELECT * FROM challenge.article ORDER BY id DESC';
    let queryParams = [];

    queryString += " LIMIT $1";
    queryParams.push(DEFAULT_MAX_RESULT_SIZE);
    
    if (offset) {
        queryString += " OFFSET $2"
        queryParams.push(offset);
    }
    let results = await pool.query(queryString, queryParams);

    return results.rows;
};

const createArticle = async (title, description, author, tags) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')
        let results = await client.query(
            'INSERT INTO challenge.article (title, description, author, tags, created_at, updated_at) ' +
            'VALUES ($1, $2, $3, $4, now(), now())',
            [title, description, author, tags]);
        await client.query('COMMIT')
        return results.rowCount;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}

const updateArticle = async (id, title, description, author, tags) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')
        let results = await client.query(
            'UPDATE challenge.article ' +
            ' SET title = $1, description = $2, author = $3, tags = $4, updated_at = now() ' +
            ' WHERE id = $5',
            [title, description, author, tags, id]);
        await client.query('COMMIT')
        return results.rowCount;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}

const deleteArticle = async (id) => {
    const client = await pool.connect();

    try {
        await client.query('BEGIN')
        let results = await pool.query(
            'DELETE FROM challenge.article WHERE id = $1', [id]);
        await client.query('COMMIT')
        return results.rowCount;
    } catch (e) {
        await client.query('ROLLBACK')
        throw e
    } finally {
        client.release()
    }
}

const cleanUp = async () => {
    await pool.end();
}

module.exports = {
    DEFAULT_MAX_RESULT_SIZE,
    getArticles,
    getArticleById,
    getArticlesByTitle,
    createArticle,
    updateArticle,
    deleteArticle,
    cleanUp
}

