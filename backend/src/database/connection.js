const knex = require('knex');
const configure = require('../../knexfile');

const connection = knex(configure.development);


module.exports = connection;