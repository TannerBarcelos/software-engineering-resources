import { Kafka, KafkaConfig } from 'kafkajs'

function createKafkaInstance(clientId: string, brokers: string[]): Kafka {
  const kafkaConfig: KafkaConfig = { brokers, clientId }
  return new Kafka(kafkaConfig)
}

export default createKafkaInstance
