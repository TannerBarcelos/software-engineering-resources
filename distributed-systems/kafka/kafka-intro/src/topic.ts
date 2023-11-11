import { Kafka, KafkaConfig } from 'kafkajs'
import { config } from 'dotenv'

config()

function createKafkaInstance(clientId: string, brokers: string[]): Kafka {
  const kafkaConfig: KafkaConfig = { brokers, clientId }
  return new Kafka(kafkaConfig)
}

const brokers: string[] = [
  `${process.env.HOST_IP!}:${process.env.BROKER_PORT!}`,
]

async function createTopic(
  topicName: string,
  numPartitions: number = 2,
): Promise<void> {
  try {
    const kafka = createKafkaInstance(process.env.CLIENT_ID!, brokers)
    const admin = kafka.admin()
    console.log(`Connecting to broker ${process.env.BROKER_URL!}`)
    await admin.connect()

    const { topics } = await admin.fetchTopicMetadata({
      topics: [topicName],
    })

    const topic = topics.find((topic) => topic.name === topicName)

    if (topics.length > 0 && topic) {
      console.error('Topic already exists')
      await admin.disconnect()
      return
    } else {
      const topic = {
        topic: topicName,
        numPartitions,
      }
      // Create a topic
      await admin.createTopics({
        topics: [topic],
      })
      console.log('Created topic successfully!')
    }
    await admin.disconnect()
  } catch (error) {
    console.error(error)
  }
}

createTopic(process.env.TOPIC_NAME!)
