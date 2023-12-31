module.exports = [
    {
      "name": "default",
      "type": "postgres",
      "host": "localhost",
      "port": 5432, 
      "username": process.env.DB_USER,
      "password": process.env.DB_PASS,
      "database": process.env.DB_NAME,
      "synchronize": true,
      "logging": true, 
      "entities": ["src/models/**/*.ts"],
      "migrations": ["src/migrations/**/*.ts"],
      "cli": {
        "entitiesDir": "src/models",
        "migrationsDir": "src/migrations"
      }
    }
  ]