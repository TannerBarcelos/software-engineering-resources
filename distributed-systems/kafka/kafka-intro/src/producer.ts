import createKafkaInstance from './lib/createInstance'
import { Partitioners, type Producer } from 'kafkajs'

type KafkaMessage = {
  value: string
}

async function createProducer(clientId: string, brokers: string[]) {
  console.log(`Creating producer`)
  const kafka = createKafkaInstance(clientId, brokers)
  const producer = kafka.producer({
    createPartitioner: Partitioners.LegacyPartitioner,
  })
  await producer.connect()
  console.log('Producer created')
  return producer
}

async function sendMessage(
  producer: Producer,
  messages: KafkaMessage[],
  topic: string,
): Promise<void> {
  try {
    const data = await producer.send({
      topic,
      messages,
    })
    console.log(data)
    await producer.disconnect()
    console.log('Producer disconnected')
  } catch (error) {
    console.error(error)
  }
}

export { createProducer, sendMessage }
