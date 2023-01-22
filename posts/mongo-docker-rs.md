---
title: MongoDB replica set using docker
publish_date: 2023-01-22
---
### Sources:
- [What is a replica set?](https://www.mongodb.com/docs/manual/replication/)
- [Terricabrel's blog tutorial](https://github.com/tericcabrel/blog-tutorials/tree/main/mongodb-replica-set)
- [MongoDB developer community](https://www.mongodb.com/community/forums/t/mongodb-replica-docker-cannot-connect-on-replica-only-individual-connection/12802)


### Motivations
- Create a replica set environment in docker to enable transactions in MongoDB on my local development machine.
- Add data persistency when my MongoDB docker images are (accidentally) deleted.
- docker-compose is fun.

### Setup
1. Create the folder structure
    ```cmd
    cd C:\source\docker\mongors
    mkdir data
    cd data
    mkdir data1 data2 data3
    cd ..
    ```
2. Copy the scripts `docker-compose.yml`, `dbstart.sh`, `rs-init.sh`
3. Add nodes to hosts file (`C:\Windows\System32\drivers\etc\hosts`):
    ```cmd
    127.0.10.1 mongo1
    127.0.10.2 mongo2
    127.0.10.3 mongo3
    ```
4. Run and enjoy
   ```sh
    # Create the replica set
    ./dbstart.sh
    # Shutdown the replica set
    docker-compose down
    # Connect to the replica set
    mongosh mongodb://mongo1:27017,mongo1:27017,mongo1:27017/?replicaSet=rs0
    # Connect to the primary docker instance (or use Docker Desktop)
    docker exec -it mongo1 mongo
    ```
### Scripts

#### docker-compose.yml
```yml
version: "3.9"

services:
  mongo1:
    container_name: mongo1
    image: mongo
    ports:
     - 127.0.10.1:27017:27017
    volumes:
      - ./data/data1:/data/db
      - ./rs-init.sh:/scripts/rs-init.sh
    restart: unless-stopped
    entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs0" ]

  mongo2:
    container_name: mongo2
    image: mongo
    ports:
     - 127.0.10.2:27017:27017
    volumes:
      - ./data/data2:/data/db
    restart: unless-stopped
    entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs0" ]
 
  mongo3:
    container_name: mongo3
    image: mongo
    ports:
     - 127.0.10.3:27017:27017
    volumes:
      - ./data/data3:/data/db
    restart: unless-stopped
    entrypoint: [ "/usr/bin/mongod", "--bind_ip_all", "--replSet", "rs0" ]
```

#### dbstart.sh
```sh
#!/bin/bash

docker-compose up -d

sleep 30

docker exec mongo1 /scripts/rs-init.sh
```

#### rs-init.sh
```sh
#!/bin/bash

mongosh <<EOF
var config = {
    "_id": "rs0",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo1:27017",
            "priority": 3
        },
        {
            "_id": 2,
            "host": "mongo2:27017",
            "priority": 2
        },
        {
            "_id": 3,
            "host": "mongo3:27017",
            "priority": 1
        }
    ]
};
rs.initiate(config, { force: true });
rs.status();
EOF
```

