const {Pool} = require("pg");

const pool = new Pool({
    user: 'haskubts',
    host: 'postgres://haskubts:Qw8QK09ZOPkjtaRqCCznoqg2xbrbt6mt@kashin.db.elephantsql.com/haskubts',
    database: 'strang3',
    password: 'Qw8QK09ZOPkjtaRqCCznoqg2xbrbt6mt',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
      }
});