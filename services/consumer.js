const { connectRabbitMQ } = require("../config/rabbitmq");

async function consumeMessages() {
  try {
    const { channel } = await connectRabbitMQ();
    console.log(`📩 Waiting for messages in queue: ${process.env.RABBITMQ_QUEUE}...`);

    channel.consume(
      process.env.RABBITMQ_QUEUE,
      (msg) => {
        if (msg) {
          console.log(`📥 Received: ${msg.content.toString()}`);
          channel.ack(msg);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    console.error("❌ Error consuming messages:", error);
    setTimeout(consumeMessages, 5000);
  }
}

consumeMessages();
