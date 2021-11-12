const {migrate} = require("postgres-migrations");

(async function() {
  const dbConfig = {
    database: "allianettemie5",
    user: "postgres",
    password: "121601",
    host: "localhost",
    port: 5432,

    ensureDatabaseExists: true
  }

  await migrate(dbConfig, "C:/Users/tasha/Documents/Postgres/migrations")
})()