import { config } from 'dotenv'
import { createTopic } from './topic'
import { createProducer, sendMessage } from './producer'

config()

const clientId = process.env.CLIENT_ID!
const topicName = process.env.TOPIC_NAME!
const brokers: string[] = [
  `${process.env.BROKER_URL!}:${process.env.BROKER_PORT!}`,
]

async function main() {
  try {
    await createTopic(clientId, topicName, brokers, 2)

    const producer = await createProducer(clientId, brokers)

    // Send a message to the topic - disconnects the producer afterwards for simplicity
    await sendMessage(producer, [{ value: 'Hello KafkaJS user!' }], topicName)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

main().then(() => {
  console.log('Done')
  process.exit(0)
})
