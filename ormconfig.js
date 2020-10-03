console.log('env > ', process.env.JAWSDB_MARIA_URL, 'entities', process.env.ENTITIES)
module.exports = {
    "type": "mariadb",
    "url": process.env.JAWSDB_MARIA_URL,
    "entities": [process.env.ENTITIES],
    "logging": true,
    "synchronize": true
}