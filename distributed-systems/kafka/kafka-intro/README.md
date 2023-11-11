## How to Run

1. Change the `env.example` to `.env` and fill the values
2. Run `npm install`
3. Get your IP with `export HOST_IP=$(ifconfig | grep -E "([0-9]{1,3}\.){3}[0-9]{1,3}" | grep -v 127.0.0.1 | awk '{ print $2 }' | cut -f2 -d: | head -n1)`. This will be used for communication between Docker containers since they are in different networks and we are not using Docker Compose.
4. Replace `BROKER_URL` in `.env` with the IP you got in the previous step (get by running `echo $HOST_IP`)
5. Start Zookeeper and Kafka Server
6. Create a topic using `npm run topic` (this will create a topic named `test`) and allow the producer and consumer to communicate via over the topic
7. Run `npm run producer` to send messages to Kafka
8. Run `npm run consumer` to start consumer

## Starting Zookeeper and Kafka Server

1. Start Zookeeper Server using Docker

```bash
docker run --name zookeeper -p 2181:2181 -d zookeeper
```

2. Start Kafka Server using Docker

> Notice the use of the `HOST_IP` variable we set earlier. This is to allow communication between the containers.

```bash
docker run --name kafka-server -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=${HOST_IP}:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://${HOST_IP}:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka
```
