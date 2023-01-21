---
title: MongoDB Quick Reference
publish_date: 2023-01-19
---

```powershell
# Connect using a connection string:
mongosh "mongodb://127.0.0.1:27019"

# Connect to a replica set
mongosh "mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=myReplicaSet"
```

```sh
# Print a list of all databases 
show dbs
# Switch current database to <db>
use <db>
# Show collections
show collections
```