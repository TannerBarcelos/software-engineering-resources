import createKafkaInstance from './lib/createInstance'

async function createTopic(
  clientId: string,
  topicName: string,
  brokers: string[],
  numPartitions: number = 1,
): Promise<void> {
  try {
    const kafka = createKafkaInstance(clientId, brokers)
    const admin = kafka.admin()
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

export { createTopic }
