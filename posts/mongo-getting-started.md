---
title: Getting started with MongoDB
publish_date: 2023-01-19
---

### 3 steps to be ready
- Not mandatory, but it simplifies the operations with docker images and containers: install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Pull and start a mongo server instance:
  ```cmd
  docker run --name some-mongo -d mongo:latest
  ```
- Use [Compass](https://www.mongodb.com/products/compass) as an interactive tool for working with your databases. The default uri `mongodb://localhost:27017` will work fine.

### become a pro with MongoDB Shell
Compass is fine, but sometimes it is easier to work with a good command-line interface: [MongoDB Shell](https://www.mongodb.com/docs/v4.4/mongo/#the-mongo-shell). Install it from [here](https://www.mongodb.com/docs/v4.4/mongo/#the-mongo-shell). Do not forgot to add the bin folder (e.g. `C:\myBin\mongosh-1.6.2-win32-x64\bin`) to the path environment variable.

```powershell
# Connect using a connection string:
mongosh "mongodb://127.0.0.1:27017"

# Print a list of all databases 
show dbs
# Switch current database to <db>
use <db>
# Show collections
show collections
```