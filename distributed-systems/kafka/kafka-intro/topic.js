const { Kafka } = require( 'kafkajs' )
const dotenv = require( 'dotenv' )

dotenv.config()

// Creates Kafka instances
function KafkaFactory( id, brokers ) {
    return new Kafka( {
        clientId: id,
        brokers
    } )
}

// Kafka brokers - Usually would not be an array of env-var URLs, but for this example it is just to keep things more private
const brokers = [`${process.env.BROKER_URL}:${process.env.BROKER_PORT}`]

async function run() {
    try {
        const kafka = KafkaFactory( process.env.TOPIC_NAME, brokers )
        const admin = kafka.admin()
        console.log( 'Connecting...' )
        await admin.connect()

        // Create a topic - (A-M, N-Z) - 2 partitions
        await admin.createTopics( {
            topics: [{
                topic: 'Users',
                numPartitions: process.env.DEFAULT_LEVEL_PARTITIONS
            }]
        } )
        console.log( 'Created successfully!' )
        await admin.disconnect()
    } catch ( error ) {
        console.error( error )
    }
}

run()