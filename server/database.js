const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres",
    database: "wad2022",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

execute(`
    CREATE TABLE IF NOT EXISTS "users"
    (
        id       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email    VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS "posts"
    (
        post_id   uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id   uuid         NOT NULL REFERENCES users (id),
        body      VARCHAR(200) NOT NULL,
        post_date DATE         NOT NULL DEFAULT CURRENT_DATE
    );
`).then(result => {
    if (result) {
        console.log("If the tables don't exist, then 'post' and 'users' tables will be created");
    }
});

module.exports = pool;