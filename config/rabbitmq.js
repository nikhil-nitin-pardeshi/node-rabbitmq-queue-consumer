require("dotenv").config();
const amqp = require("amqplib");

let connection;
let channel;

async function connectRabbitMQ() {
  if (!connection) {
    const RMQ_URL = `amqp://${process.env.RMQ_USERNAME}:${process.env.RMQ_PASSWORD}@${process.env.RMQ_HOST}:${process.env.RMQ_PORT}${process.env.RMQ_VHOST}`;

    connection = await amqp.connect(RMQ_URL);
    channel = await connection.createChannel();
    await channel.assertQueue(process.env.RABBITMQ_QUEUE, { durable: true });
    console.log("🐰 Connected to RabbitMQ");
  }
  return { connection, channel };
}

module.exports = { connectRabbitMQ };