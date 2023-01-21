---
title: MongoDB Dump & Restore
publish_date: 2023-01-19
---

`mongodump` and `mongorestore` are used to backup and restore databases and collections. It is part of the MongoDB database tools:

- Install the MongoDB Command Line Database Tools for Windows: https://www.mongodb.com/try/download/database-tools
- Add the bin folder to the Path environment variable (e.g. `C:\myBin\mongodb-database-tools\bin`)
- Check the installation:
  ```cmd
  mongodump --version
  -> mongodump version: 100.6.1
  ```

To take a dump of a MongoDB instance on your local machine ([more details](https://www.mongodb.com/docs/database-tools/mongodump/#connect-to-a-mongodb-instance)):
```cmd
cd c:\backups
mongodump --uri "mongodb://xxx" --out "databaseDump"
```

A folder is created in `databaseDump` for each databases in the instance. To restore a DB on your local instance ([more details](https://www.mongodb.com/docs/database-tools/mongorestore/#syntax)):
```cmd
# restore the full database MyDatabase
mongorestore --db MyDatabase databaseDump\MyDatabase

# restore a specific collection (Services) with previously droping the existing collection
mongorestore --db MyDatabase --collection Services databaseDump\MyDatabase\Services.bson --drop
```
